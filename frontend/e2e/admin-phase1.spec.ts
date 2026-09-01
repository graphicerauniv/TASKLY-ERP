import { expect, test } from '@playwright/test';

const formSnapshot = {
  name: 'Undergraduate admission',
  description: 'Admission form',
  status: 'published' as const,
  isActive: true,
  version: 3,
  sections: [
    {
      id: 'personal',
      name: 'Personal details',
      description: 'Applicant identity',
      isActive: true,
      order: 1,
      subsections: [
        {
          id: 'identity',
          name: 'Identity',
          description: '',
          isActive: true,
          isRepeatable: false,
          minEntries: 0,
          maxEntries: 1,
          fields: [
            {
              id: 'email',
              name: 'Email address',
              type: 'email',
              placeholder: '',
              helpText: '',
              required: true,
              isActive: true,
              order: 1,
              options: [],
              validation: {},
            },
          ],
        },
      ],
    },
  ],
};

const applications = [
  {
    _id: 'application-e2e-1',
    applicationNumber: 'APP-2026-0001',
    studentName: 'Ananya Sharma',
    academicSession: '2026–27',
    courseName: 'B.Tech Computer Science',
    collegeName: 'School of Engineering',
    departmentName: 'Computer Science',
    studentTypeName: 'Regular',
    countryName: 'India',
    status: 'pending_approval' as const,
    currentSectionId: 'personal',
    formVersion: 3,
    formSnapshot,
    responses: { email: 'ananya@example.test' },
    repeatableResponses: {},
    createdAt: '2026-08-28T09:30:00.000Z',
    submittedAt: '2026-08-30T11:15:00.000Z',
  },
  {
    _id: 'application-e2e-2',
    applicationNumber: 'APP-2026-0002',
    studentId: 'GEU-2026-0012',
    studentName: 'Kabir Mehta',
    academicSession: '2026–27',
    courseName: 'BBA',
    status: 'approved' as const,
    currentSectionId: 'personal',
    formVersion: 3,
    formSnapshot,
    responses: { email: 'kabir@example.test' },
    repeatableResponses: {},
    feeLedgerKinds: ['academic'] as const,
    createdAt: '2026-08-20T09:30:00.000Z',
    submittedAt: '2026-08-22T11:15:00.000Z',
    approvedAt: '2026-08-23T12:15:00.000Z',
    isActive: true,
  },
];

test.describe('Phase 1 admin shell and admissions pilot', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('taskly_admin_token', 'e2e-admin-token');
      localStorage.setItem(
        'taskly_admin',
        JSON.stringify({ name: 'Aarav Admin', email: 'admin@example.test' }),
      );
    });

    await page.route('**/api/v1/admissions**', async (route) => {
      const url = new URL(route.request().url());
      if (route.request().method() !== 'GET') {
        await route.fallback();
        return;
      }

      const match = url.pathname.match(/\/admissions\/([^/]+)$/);
      if (match) {
        const item = applications.find((application) => application._id === match[1]);
        await route.fulfill({
          status: item ? 200 : 404,
          contentType: 'application/json',
          body: JSON.stringify(
            item ? { item, masterLabels: {} } : { message: 'Application not found' },
          ),
        });
        return;
      }

      const requestedStatus = url.searchParams.get('status');
      const items = requestedStatus
        ? applications.filter((application) => application.status === requestedStatus)
        : applications;
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          items,
          pagination: { page: 1, limit: 25, total: items.length, pages: 1 },
        }),
      });
    });
  });

  test('supports the applications workbench, preview, and full record route', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/admin/admissions/applications');

    await expect(page.getByRole('heading', { name: 'Applications', exact: true })).toBeVisible();
    await expect(
      page.getByRole('table', { name: 'All applications application records' }),
    ).toBeVisible();
    await expect(page.getByText('APP-2026-0001')).toBeVisible();

    await page.getByRole('button', { name: /Ananya Sharma/ }).click();
    const preview = page.getByRole('dialog', { name: 'Ananya Sharma' });
    await expect(preview).toBeVisible();
    await preview.getByRole('link', { name: 'Open full record' }).click();

    await expect(page).toHaveURL(/\/admin\/admissions\/applications\/application-e2e-1$/);
    await expect(page.getByRole('heading', { name: 'Ananya Sharma' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Application', exact: true }).click();
    await expect(page).toHaveURL(/tab=application/);
    await expect(page.getByRole('heading', { name: 'Personal details' })).toBeVisible();
  });

  test('keeps saved views in the URL and clears page-scoped selection', async ({ page }) => {
    await page.goto('/admin/admissions/applications');
    await page.getByRole('checkbox', { name: 'Select Kabir Mehta' }).check();
    await expect(page.getByText('1 selected on this page')).toBeVisible();

    await page.getByRole('button', { name: /Drafts/ }).click();
    await expect(page).toHaveURL(/view=draft/);
    await expect(page.getByText('1 selected on this page')).toHaveCount(0);
  });

  test('uses a focus-trapped mobile navigation without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/admin/admissions/applications');

    const menu = page.getByRole('button', { name: 'Open admin navigation' });
    await menu.click();
    await expect(page.getByRole('dialog', { name: 'Admin navigation' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Admin navigation' })).toHaveCount(0);
    await expect(menu).toBeFocused();

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasOverflow).toBe(false);
  });
});
