import { expect, test } from '@playwright/test';

const reviewApplication = {
  _id: 'application-review-e2e',
  applicationNumber: 'APP-2026-0104',
  studentName: 'Ananya Sharma',
  academicSession: '2026–27',
  courseName: 'B.Tech Computer Science',
  collegeName: 'School of Engineering',
  status: 'pending_approval',
  currentSectionId: 'personal',
  formVersion: 3,
  formSnapshot: {
    name: 'Undergraduate admission',
    description: 'Admission form',
    status: 'published',
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
            order: 1,
            visibilityCondition: null,
            fields: [
              {
                id: 'email',
                name: 'Email address',
                type: 'email',
                isRequired: true,
                isActive: true,
                order: 1,
                placeholder: '',
                defaultValue: '',
                helpText: '',
                options: [],
                dataSource: null,
                searchable: false,
                searchConfig: null,
                validation: {},
                visibilityCondition: null,
              },
              {
                id: 'photo',
                name: 'Applicant photograph',
                type: 'image',
                isRequired: false,
                isActive: true,
                order: 2,
                placeholder: '',
                defaultValue: '',
                helpText: '',
                options: [],
                dataSource: null,
                searchable: false,
                searchConfig: null,
                validation: {},
                visibilityCondition: null,
              },
            ],
          },
        ],
      },
    ],
  },
  responses: {
    email: 'ananya@example.test',
    photo: { name: 'ananya-photo.jpg', url: '/uploads/ananya-photo.jpg' },
  },
  repeatableResponses: {},
  createdAt: '2026-08-28T09:30:00.000Z',
  submittedAt: '2026-08-30T11:15:00.000Z',
};

const admissionForm = {
  _id: 'form-e2e-1',
  name: 'Undergraduate admission',
  description: 'Primary undergraduate application form',
  slug: 'undergraduate-admission',
  status: 'published',
  isActive: true,
  version: 3,
  sections: reviewApplication.formSnapshot.sections,
};

test.describe('Phase 2 admissions review and forms library', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('taskly_admin_token', 'e2e-admin-token');
      localStorage.setItem(
        'taskly_admin',
        JSON.stringify({ name: 'Aarav Admin', email: 'admin@example.test' }),
      );
    });
  });

  test('reviews evidence before approval and completes focused activation', async ({ page }) => {
    await page.route('**/api/v1/admissions/application-review-e2e**', async (route) => {
      if (route.request().method() === 'POST' && route.request().url().endsWith('/approve')) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            item: {
              ...reviewApplication,
              status: 'approved',
              studentId: 'GEU-2026-0104',
              isActive: true,
              approvedAt: '2026-08-31T12:00:00.000Z',
            },
          }),
        });
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ item: reviewApplication, masterLabels: {} }),
      });
    });

    await page.goto('/admin/admissions/applications/application-review-e2e/review');
    await expect(page.getByRole('heading', { name: 'Review readiness' })).toBeVisible();
    await expect(page.getByText('Ready for decision')).toBeVisible();
    await expect(page.getByText('Applicant photograph')).toBeVisible();

    await page.getByRole('button', { name: 'Approve and activate' }).click();
    const dialog = page.getByRole('dialog', { name: 'Approve and activate student' });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Confirm approval and activation' }).click();
    await expect(page.getByText('Activation complete')).toBeVisible();
    await expect(page.getByText('Approved and activated')).toBeVisible();
  });

  test('represents admission forms as a searchable managed library', async ({ page }) => {
    await page.route('**/api/v1/forms', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ items: [admissionForm] }),
      });
    });

    await page.goto('/admin/admissions/forms');
    await expect(page.getByRole('heading', { name: 'Admission forms' })).toBeVisible();
    await expect(page.getByRole('table', { name: 'Admission form configurations' })).toBeVisible();
    await expect(page.getByText('Primary undergraduate application form')).toBeVisible();

    await page.getByRole('searchbox', { name: 'Search admission forms' }).fill('missing');
    await expect(page.getByRole('heading', { name: 'No matching forms' })).toBeVisible();
    await page.getByRole('button', { name: 'Clear search' }).click();
    await expect(page.getByText('Primary undergraduate application form')).toBeVisible();
  });

  test('edits an application in a guarded, autosaving admin workspace', async ({ page }) => {
    let savedEmail = 'ananya@example.test';
    const editorApplication = {
      ...reviewApplication,
      _id: 'application-editor-e2e',
      status: 'draft',
      submittedAt: undefined,
    };
    await page.route('**/api/v1/admissions/application-editor-e2e', async (route) => {
      if (route.request().method() === 'PATCH') {
        const body = route.request().postDataJSON();
        savedEmail = body.responses.email;
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            item: {
              ...editorApplication,
              responses: body.responses,
              repeatableResponses: body.repeatableResponses,
              currentSectionId: body.currentSectionId,
            },
          }),
        });
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ item: editorApplication, masterLabels: {} }),
      });
    });

    await page.goto('/admin/admissions/application-editor-e2e/edit');
    await expect(page.getByRole('heading', { name: 'Ananya Sharma' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Application sections' })).toBeVisible();

    await page.getByRole('textbox', { name: 'Email address' }).fill('updated@example.test');
    await page.getByRole('link', { name: 'Application record' }).click();
    const leaveDialog = page.getByRole('dialog', { name: 'Leave without saving?' });
    await expect(leaveDialog).toBeVisible();
    await leaveDialog.getByRole('button', { name: 'Stay on page' }).click();

    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'All changes saved' })).toBeVisible();
    expect(savedEmail).toBe('updated@example.test');
  });

  test('blocks publishing when form structure or dependencies are invalid', async ({ page }) => {
    const invalidForm = {
      ...admissionForm,
      _id: 'form-invalid-e2e',
      status: 'draft',
      sections: [
        {
          ...admissionForm.sections[0],
          subsections: [
            {
              ...admissionForm.sections[0].subsections[0],
              fields: [],
            },
          ],
        },
      ],
    };
    await page.route('**/api/v1/forms', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ items: [invalidForm] }),
      });
    });
    await page.route('**/api/v1/master-data/types', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ items: [] }),
      });
    });

    await page.goto('/admin/admissions/forms/form-invalid-e2e/edit');
    await page.getByRole('button', { name: 'Publish form' }).click();
    const publishDialog = page.getByRole('dialog', { name: 'Review form readiness' });
    await expect(publishDialog).toBeVisible();
    await expect(publishDialog.getByText('has no active fields')).toBeVisible();
    await expect(publishDialog.getByRole('button', { name: 'Publish form' })).toBeDisabled();
  });
});
