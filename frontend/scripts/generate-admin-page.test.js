import { test } from 'node:test';
import assert from 'node:assert/strict';
import { adminPageFiles } from './generate-admin-page.js';

test('new admin pages inherit shared styling without local CSS or fake records', () => {
  const files = adminPageFiles('purchase-orders');
  assert.equal(Object.keys(files).length, 2);
  assert.match(files['purchase-orders.component.ts'], /class PurchaseOrdersComponent/);
  assert.match(files['purchase-orders.component.ts'], /ChangeDetectionStrategy.OnPush/);
  assert.match(files['purchase-orders.component.html'], /<erp-admin-page/);
  assert.match(files['purchase-orders.component.html'], /erp-admin-illustration/);
  assert.doesNotMatch(files['purchase-orders.component.ts'], /styleUrl|styles:/);
});

test('page names cannot escape the admin feature directory or inject markup', () => {
  for (const name of ['', '../outside', 'a/b', 'a\\b', '<script>', 'Capital', 'a b']) {
    assert.throws(() => adminPageFiles(name));
  }
});
