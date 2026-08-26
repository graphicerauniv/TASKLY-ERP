import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDir, '..');
const srcRoot = join(projectRoot, 'src');

const normalise = (filePath) => relative(projectRoot, filePath).replaceAll('\\', '/');

const legacyRawColorFiles = new Set([
  // Existing legacy screens are temporarily allowed while they are migrated
  // to src/style tokens. Do not add new files here without a cleanup ticket.
  'src/index.html',
  'src/style/_system.scss',
]);

const scopedThemeTokenFiles = new Set([
  // The Student Portal is an intentionally isolated product surface. Its locked
  // tokens are scoped under [data-portal='student'] and cannot affect Admin UI.
  'src/app/features/student/styles/_student-tokens.scss',
]);

const rawColorPattern = /#[0-9a-fA-F]{3,8}\b|rgba?\(/;
const tailwindArbitraryColorPattern =
  /\b(?:bg|text|border|ring|shadow|from|via|to)-\[[^\]]*(?:#[0-9a-fA-F]{3,8}|rgba?\()[^\]]*\]/;
const localStyleExceptionPattern = /ERP-LOCAL-STYLE:\s*\S+/;
const internalHrefPattern = /<a\b[^>]*\bhref=["']\/(?!\/)[^"']*["']/i;
const directTableActionButtonPattern =
  /<td\b[^>]*class=["'][^"']*erp-table-shell__actions[^"']*["'][\s\S]{0,360}<button\b[\s\S]{0,260}>\s*(?:<svg[\s\S]{0,120}<\/svg>\s*)?(Edit|Delete|View(?: details)?|Enable|Disable)\s*</i;
const lazyImportPattern =
  /load(?:Component|Children)\s*:\s*\(\)\s*=>[\s\S]{0,320}?import\(["']([^"']+)["']\)/g;

function walk(dir) {
  if (!existsSync(dir)) return [];

  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      return walk(fullPath);
    }

    return fullPath;
  });
}

const files = walk(srcRoot).filter((file) => /\.(scss|css|html|ts)$/.test(file));
const errors = [];

const htmlFiles = files.filter((file) => file.endsWith('.html')).map(normalise);
const browserEntryFiles = htmlFiles.filter(
  (file) => file.endsWith('/index.html') || file === 'src/index.html',
);

if (browserEntryFiles.length !== 1 || browserEntryFiles[0] !== 'src/index.html') {
  errors.push(
    `Angular SPA must have exactly one browser entry file at src/index.html. Found: ${browserEntryFiles.join(', ') || 'none'}.`,
  );
}

for (const htmlFile of htmlFiles) {
  if (htmlFile !== 'src/index.html' && !/^src\/app\/.+\.component\.html$/.test(htmlFile)) {
    errors.push(
      `${htmlFile}: route UI must be an Angular *.component.html template, not a standalone HTML page.`,
    );
  }
}

for (const file of files) {
  const rel = normalise(file);
  const content = readFileSync(file, 'utf8');

  if (
    rel.startsWith('src/app/features/') &&
    rel.endsWith('.scss') &&
    !rel.startsWith('src/app/features/student/styles/') &&
    !localStyleExceptionPattern.test(content)
  ) {
    errors.push(
      `${rel}: feature SCSS requires a first-line "ERP-LOCAL-STYLE: <reason>" exception. Prefer src/style/_system.scss, shared/ui, or layout utilities.`,
    );
  }

  const canDeclareRawColors =
    rel === 'src/style/_tokens.scss' ||
    legacyRawColorFiles.has(rel) ||
    scopedThemeTokenFiles.has(rel);

  if (
    !canDeclareRawColors &&
    (rawColorPattern.test(content) || tailwindArbitraryColorPattern.test(content))
  ) {
    errors.push(
      `${rel}: raw colors are not allowed. Declare/change the value in src/style/_tokens.scss and consume it with var(--erp-*).`,
    );
  }

  if (rel.endsWith('.html') && internalHrefPattern.test(content)) {
    errors.push(
      `${rel}: internal Angular navigation must use routerLink instead of <a href="/...">.`,
    );
  }

  if (rel.endsWith('.html') && directTableActionButtonPattern.test(content)) {
    errors.push(
      `${rel}: table/list action columns must use erp-compact-action-menu instead of visible row action buttons.`,
    );
  }

  if (rel.endsWith('.routes.ts') || rel === 'src/app/app.routes.ts') {
    for (const match of content.matchAll(lazyImportPattern)) {
      const target = match[1];
      const authLazy = rel.includes('/auth/') || target.includes('/auth');
      const dashboardLazy = target.includes('dashboard');
      if (!authLazy && !dashboardLazy) {
        errors.push(
          `${rel}: lazy loading is limited to Auth/Login and Dashboard. Import ${target} as a normal route component.`,
        );
      }
    }
  }
}

if (errors.length > 0) {
  console.error('\nUI rules check failed:\n');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  console.error(
    '\nFix the violations or update FRONTEND_UI_RULES.md with a deliberate exception.\n',
  );
  process.exit(1);
}

console.log('UI rules check passed.');
