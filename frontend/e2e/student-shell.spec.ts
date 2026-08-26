import { expect, test } from '@playwright/test';

const requiredViewports = [
  { width: 360, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 412, height: 915 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1536, height: 1024 },
  { width: 1920, height: 1080 },
] as const;

test.describe('Student portal shell', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('taskly_student_token', 'e2e-student-token');
      localStorage.setItem(
        'taskly_student_profile',
        JSON.stringify({
          id: 'student-e2e-1',
          studentId: 'GEU-E2E-001',
          name: 'Vivek Sharma',
          mustChangePassword: false,
        }),
      );
    });
  });

  test('desktop rail expands without moving the content and restores after pointer leave', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/student/dashboard');

    const sidebar = page.locator('.student-sidebar');
    const content = page.locator('.student-page');
    const dashboardLink = page.getByRole('link', { name: 'Open student dashboard' });

    await expect(sidebar).toHaveCSS('width', '72px');
    await expect(dashboardLink).toHaveAttribute('aria-current', 'page');
    const initialContent = await content.boundingBox();

    await sidebar.hover();
    await expect(sidebar).toHaveCSS('width', '264px');
    const expandedContent = await content.boundingBox();
    expect(expandedContent?.x).toBe(initialContent?.x);
    expect(expandedContent?.width).toBe(initialContent?.width);

    await page.locator('.student-dashboard-hero').hover();
    await expect(sidebar).toHaveCSS('width', '72px');

    await dashboardLink.focus();
    await expect(sidebar).toHaveCSS('width', '264px');
  });

  test('profile menu coordinates opening, outside click and Escape', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/student/dashboard');

    const trigger = page.getByRole('button', { name: 'Open Vivek Sharma account menu' });
    await trigger.click();
    await expect(page.getByRole('menu', { name: 'Student account menu' })).toBeVisible();
    await page.locator('.student-dashboard-hero').click();
    await expect(page.getByRole('menu', { name: 'Student account menu' })).toBeHidden();

    await trigger.click();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menu', { name: 'Student account menu' })).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('mobile and tablet navigation opens as a trapped drawer and closes safely', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/student/dashboard');

    const menuButton = page.getByRole('button', { name: 'Open student navigation' });
    await menuButton.click();
    await expect(page.locator('#student-mobile-drawer')).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe('hidden');

    await page.keyboard.press('Escape');
    await expect(page.locator('#student-mobile-drawer')).toBeHidden();
    await expect(menuButton).toBeFocused();

    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await page.getByRole('link', { name: 'Open student dashboard' }).click();
    await expect(page.locator('#student-mobile-drawer')).toBeHidden();
  });

  test('required viewports do not produce horizontal page overflow', async ({ page }) => {
    const runtimeErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') runtimeErrors.push(message.text());
    });
    page.on('pageerror', (error) => runtimeErrors.push(error.message));

    for (const viewport of requiredViewports) {
      await page.setViewportSize(viewport);
      await page.goto('/student/dashboard');
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasOverflow, `${viewport.width}x${viewport.height} has horizontal overflow`).toBe(
        false,
      );
    }

    expect(runtimeErrors).toEqual([]);
  });

  test('student tokens remain scoped away from the admin login surface', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('[data-portal="student"]')).toHaveCount(0);
    const leakedToken = await page.evaluate(() =>
      getComputedStyle(document.body).getPropertyValue('--student-color-primary').trim(),
    );
    expect(leakedToken).toBe('');
  });

  test('dashboard hero and module configuration match the approved Phase 2 contract', async ({
    page,
  }) => {
    const failedAssets: string[] = [];
    page.on('response', (response) => {
      if (response.url().includes('/assets/student/dashboard/') && !response.ok()) {
        failedAssets.push(`${response.status()} ${response.url()}`);
      }
    });

    await page.setViewportSize({ width: 1536, height: 1024 });
    await page.goto('/student/dashboard');

    await expect(page.getByRole('heading', { name: 'Ready for your day, Vivek?' })).toBeVisible();
    await expect(page.locator('.student-dashboard-hero__art')).toHaveAttribute(
      'src',
      '/assets/student/dashboard/hero/day-illustration.webp',
    );

    const cards = page.locator('.student-module-card');
    await expect(cards).toHaveCount(9);
    await expect(page.locator('.student-module-card__label')).toHaveText([
      'Academics',
      'Attendance',
      'Fees',
      'Exams',
      'Hostel',
      'Complaints',
      'Placement',
      'Documents',
      'Campus',
    ]);

    const assetNames = await page
      .locator('.student-module-card img')
      .evaluateAll((images) =>
        images.map((image) => new URL((image as HTMLImageElement).src).pathname),
      );
    expect(assetNames).toEqual([
      '/assets/student/dashboard/modules/academics.webp',
      '/assets/student/dashboard/modules/attendance.webp',
      '/assets/student/dashboard/modules/fees.webp',
      '/assets/student/dashboard/modules/exams.webp',
      '/assets/student/dashboard/modules/hostel.webp',
      '/assets/student/dashboard/modules/complaints.webp',
      '/assets/student/dashboard/modules/placement.webp',
      '/assets/student/dashboard/modules/documents.webp',
      '/assets/student/dashboard/modules/campus.webp',
    ]);

    await expect(cards.first()).toHaveCSS('background-color', 'rgb(227, 242, 253)');
    await expect(cards.first()).toHaveAttribute('aria-disabled', 'true');
    const routeBeforeDisabledClick = page.url();
    await cards.first().dispatchEvent('click');
    expect(page.url()).toBe(routeBeforeDisabledClick);
    const feesModule = page
      .getByRole('navigation', { name: 'Student ERP modules' })
      .getByLabel('Open fees');
    await expect(feesModule).toHaveAttribute('href', '/student/fees');
    await feesModule.click();
    await expect(page).toHaveURL(/\/student\/fees$/);
    expect(failedAssets).toEqual([]);
  });

  test('dashboard keeps a three-column module grid on desktop and mobile', async ({ page }) => {
    for (const viewport of [
      { width: 1536, height: 1024 },
      { width: 390, height: 844 },
      { width: 360, height: 800 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto('/student/dashboard');

      const columnCount = await page
        .locator('.student-dashboard-modules ul')
        .evaluate(
          (grid) => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length,
        );
      expect(columnCount, `${viewport.width}px dashboard grid`).toBe(3);
    }
  });

  test('dashboard remains fixed while the desktop navigation overlays it', async ({ page }) => {
    await page.setViewportSize({ width: 1536, height: 1024 });
    await page.goto('/student/dashboard');

    const dashboard = page.locator('.student-dashboard');
    const sidebar = page.locator('.student-sidebar');
    const before = await dashboard.boundingBox();
    await sidebar.hover();
    await expect(sidebar).toHaveCSS('width', '264px');
    const after = await dashboard.boundingBox();

    expect(after?.x).toBe(before?.x);
    expect(after?.width).toBe(before?.width);
  });

  test('dashboard identity comes from the authenticated student session', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem(
        'taskly_student_profile',
        JSON.stringify({
          id: 'student-e2e-2',
          studentId: 'GEU-E2E-002',
          name: 'Aanya Gupta',
          mustChangePassword: false,
        }),
      );
    });
    await page.goto('/student/dashboard');

    await expect(page.getByRole('heading', { name: 'Ready for your day, Aanya?' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open Aanya Gupta account menu' })).toBeVisible();
    await expect(page.locator('.student-header__profile-trigger .student-avatar')).toHaveText('AG');
  });

  test('dashboard uses the approved shared preview state without unsupported placeholders', async ({
    page,
  }) => {
    await page.goto('/student/dashboard');

    await expect(page.locator('.student-dashboard-operational')).toBeVisible();
    await expect(page.locator('.student-widget-state[data-status="unavailable"]')).toHaveCount(0);
    await expect(page.locator('.student-schedule-desktop').getByText('Data Structures')).toBeVisible();
    await expect(page.locator('.student-attendance-ring')).toContainText('82%');
    await expect(page.locator('.student-fee-summary')).toContainText('₹30,000');
    await expect(page.getByRole('link', { name: 'Pay fees' })).toHaveAttribute(
      'href',
      '/student/fees',
    );
    await expect(page.getByText('Mid-Sem Exam Timetable Released')).toBeVisible();
    await expect(page.getByText('Academic progress unavailable')).toHaveCount(0);
    await expect(page.getByText('Hostel allocation unavailable')).toHaveCount(0);
    await expect(page.getByText('Documents unavailable')).toHaveCount(0);
    await expect(page.locator('.student-notification-button__badge')).toHaveCount(0);
  });
});
