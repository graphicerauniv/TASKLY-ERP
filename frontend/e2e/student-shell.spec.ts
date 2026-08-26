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

    await page.locator('.student-dashboard-placeholder').hover();
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
    await page.locator('.student-dashboard-placeholder').click();
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
});
