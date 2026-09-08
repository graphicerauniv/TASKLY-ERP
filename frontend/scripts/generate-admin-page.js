import { mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Generate composition only: all presentation comes from the shared admin system.
export function adminPageFiles(name) {
  if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(name)) {
    throw new Error('Use a lowercase kebab-case page name, for example purchase-orders.');
  }
  const className = name.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join('');
  const title = name.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join(' ');
  return {
    [`${name}.component.ts`]: `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';

@Component({
  selector: 'erp-${name}',
  imports: [AdminPageComponent, AdminIllustrationComponent],
  templateUrl: './${name}.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${className}Component {}
`,
    [`${name}.component.html`]: `<erp-admin-page title="${title}" variant="minimal">
  <!-- Put working page-level actions in the shared [page-actions] slot. -->
  <!-- Replace this honest setup state with live loading/error/empty/content states. -->
  <section class="erp-card erp-card--padded">
    <erp-admin-illustration kind="dataConfiguration" />
    <h2>Setup required</h2>
    <p>Connect this page to its data source before enabling the workflow.</p>
  </section>
</erp-admin-page>
`,
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const name = process.argv[2] || '';
    const files = adminPageFiles(name);
    const root = join(dirname(fileURLToPath(import.meta.url)), '../src/app/features/admin', name);
    if (existsSync(root)) throw new Error(`Refusing to overwrite existing feature: ${name}`);
    if (process.argv.includes('--dry-run')) {
      console.log(JSON.stringify(files, null, 2));
    } else {
      mkdirSync(root, { recursive: true });
      for (const [file, content] of Object.entries(files)) {
        writeFileSync(join(root, file), content, { flag: 'wx' });
      }
      console.log(`Created ${name}. Register its lazy route and workspace links, then wire real data. See FRONTEND_UI_RULES.md.`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
