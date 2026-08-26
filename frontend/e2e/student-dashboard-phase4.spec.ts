import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { expect, test } from '@playwright/test';

const screenshotDirectory = join('test-results', 'phase4-student-dashboard');

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('taskly_student_token', 'phase4-student-token');
    localStorage.setItem(
      'taskly_student_profile',
      JSON.stringify({
        id: 'student-phase4',
        studentId: 'GEU-PHASE4-001',
        name: 'Vivek Sharma',
        mustChangePassword: false,
      }),
    );
  });
});

test('captures the final responsive dashboard and verifies Phase 4 geometry', async ({ page }) => {
  await mkdir(screenshotDirectory, { recursive: true });

  for (const viewport of [
    { name: 'desktop-1536x1024', width: 1536, height: 1024 },
    { name: 'mobile-430x932', width: 430, height: 932 },
    { name: 'mobile-390x844', width: 390, height: 844 },
    { name: 'mobile-360x800', width: 360, height: 800 },
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/student/dashboard');
    await page.locator('.student-dashboard-hero__art').evaluate(async (image) => {
      const element = image as HTMLImageElement;
      if (!element.complete) await new Promise((resolve) => element.addEventListener('load', resolve));
      await element.decode();
    });

    const hero = page.locator('.student-dashboard-hero');
    const heroArt = page.locator('.student-dashboard-hero__art');
    await expect(hero).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    await expect(hero).toHaveCSS('border-top-width', '0px');
    await expect(heroArt).toHaveJSProperty('naturalWidth', 1774);
    await expect(page.locator('.student-module-card')).toHaveCount(9);

    if (viewport.width >= 768) {
      await expect(page.locator('.student-mobile-bottom-nav')).toBeHidden();
      const cards = await page.locator('.student-module-card').evaluateAll((items) =>
        items.map((item) => Math.round(item.getBoundingClientRect().height)),
      );
      expect(cards.every((height) => height >= 72 && height <= 76)).toBe(true);
    } else {
      await expect(page.locator('.student-mobile-bottom-nav')).toBeVisible();
      await expect(page.locator('.student-mobile-bottom-nav a, .student-mobile-bottom-nav button')).toHaveCount(4);
      const columns = await page.locator('.student-dashboard-modules ul').evaluate(
        (grid) => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length,
      );
      expect(columns).toBe(3);
    }

    await page.screenshot({
      path: join(screenshotDirectory, `${viewport.name}.png`),
      fullPage: false,
      animations: 'disabled',
    });

    if (viewport.width < 768) {
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(150);
      const announcementBottom = await page
        .locator('.student-operational-card--notices')
        .evaluate((element) => element.getBoundingClientRect().bottom);
      const navigationTop = await page
        .locator('.student-mobile-bottom-nav')
        .evaluate((element) => element.getBoundingClientRect().top);
      expect(announcementBottom).toBeLessThanOrEqual(navigationTop - 8);
      await page.screenshot({
        path: join(screenshotDirectory, `${viewport.name}-page-end.png`),
        fullPage: false,
        animations: 'disabled',
      });
    }
  }

  await page.setViewportSize({ width: 1536, height: 1024 });
  await page.goto('/student/dashboard');
  await page.locator('.student-sidebar').hover();
  await page.screenshot({
    path: join(screenshotDirectory, 'desktop-1536x1024-sidebar-expanded.png'),
    fullPage: false,
    animations: 'disabled',
  });
});
