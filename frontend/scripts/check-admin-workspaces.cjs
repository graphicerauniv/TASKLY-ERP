const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

function readModule(relative) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const context = { exports: {}, require: () => ({ authGuard: null, unsavedChangesGuard: null }) };
  vm.runInNewContext(compiled, context, { filename: relative });
  return context.exports;
}

const { ADMIN_ROUTES } = readModule('src/app/features/admin/admin.routes.ts');
const { resolveAdminWorkspace } = readModule(
  'src/app/shared/ui/admin-workspace/admin-workspace.registry.ts',
);
const { ADMIN_ILLUSTRATIONS } = readModule(
  'src/app/shared/ui/admin-illustration/admin-illustration.registry.ts',
);
const routes = ADMIN_ROUTES.find((route) => route.children).children.filter(
  (route) => route.loadComponent,
);
const editable = routes.filter((route) => !route.path.startsWith('academics/'));
const reference = routes.filter((route) => route.path.startsWith('academics/'));
const routePattern = (route) =>
  new RegExp(
    '^/admin/' +
      route.path
        .split('/')
        .map((part) =>
          part.startsWith(':') ? '[^/]+' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        )
        .join('/') +
      '$',
  );

assert.equal(editable.length, 60, 'Update the rollout audit when admin routes change');
assert.equal(
  new Set(
    editable.map((route) => route.loadComponent.toString().match(/component\.([A-Z]\w+)/)?.[1]),
  ).size,
  27,
  'Update the component layout audit',
);
assert.equal(reference.length, 12, 'Review changes to protected Academics routes');
for (const route of editable) {
  const url = '/admin/' + route.path.replace(/:[^/]+/g, 'sample-id');
  const workspace = resolveAdminWorkspace(url);
  assert.ok(workspace, `Missing workspace: ${url}`);
  assert.ok(ADMIN_ILLUSTRATIONS[workspace.illustration], `Missing illustration key: ${url}`);
  assert.equal(
    workspace.links.filter((link) => link.active).length,
    1,
    `Expected one current page: ${url}`,
  );
  assert.equal(
    new Set(workspace.links.map((link) => link.route)).size,
    workspace.links.length,
    `Duplicate links: ${url}`,
  );
  for (const link of workspace.links) {
    assert.ok(
      routes.some((target) => routePattern(target).test(link.route)),
      `Broken destination: ${link.route}`,
    );
  }
  assert.equal(
    JSON.stringify(resolveAdminWorkspace(url + '/?search=test#details')),
    JSON.stringify(workspace),
    `Query/trailing slash changed page context: ${url}`,
  );
}
for (const route of reference) assert.equal(resolveAdminWorkspace('/admin/' + route.path), null);
assert.equal(resolveAdminWorkspace('/student/dashboard'), null);
assert.equal(resolveAdminWorkspace('/login'), null);
assert.equal(
  resolveAdminWorkspace('/admin/admissions/123/offline-payment').illustration,
  'feeWallet',
);
assert.equal(
  resolveAdminWorkspace('/admin/fees/course-fees/import').links.find((link) => link.active).label,
  'Import workbook',
);
const sidebarTemplate = fs.readFileSync(
  path.join(root, 'src/app/features/admin/layout/admin-shell.component.html'),
  'utf8',
);
assert.ok(
  !sidebarTemplate.includes('erp-admin-illustration'),
  'Sidebar must retain Lucide line icons',
);
for (const section of ['overview', 'payments', 'credits', 'discounts']) {
  assert.ok(
    routes.some((route) => route.path === 'accounts/' + section),
    'Missing split collection page: ' + section,
  );
  assert.equal(
    resolveAdminWorkspace('/admin/accounts/' + section).links.find((link) => link.active).route,
    '/admin/accounts/' + section,
  );
}
for (const asset of Object.values(ADMIN_ILLUSTRATIONS))
  assert.ok(fs.existsSync(path.join(root, 'public', asset)), `Missing asset: ${asset}`);

function checkTemplates(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) checkTemplates(full);
    else if (/\.(html|ts)$/.test(entry.name))
      assert.ok(
        !fs.readFileSync(full, 'utf8').includes('assets/admin/finance-icons/'),
        `Legacy dark icon still used: ${full}`,
      );
  }
}
checkTemplates(path.join(root, 'src/app/features/admin'));
console.log(
  `Admin UI contracts passed: ${editable.length} workspaces, ${reference.length} protected reference routes, all links and illustration assets valid.`,
);
