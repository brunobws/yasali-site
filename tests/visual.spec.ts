import { expect, test } from '@playwright/test';

const viewports = [320, 390, 430, 768, 1440] as const;

for (const width of viewports) {
  test(`home: ${width}px sem overflow ou erro de console`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });

    await page.setViewportSize({ width, height: width < 768 ? 900 : 1000 });
    await page.goto('/', { waitUntil: 'networkidle' });

    await expect(page.locator('main')).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
    expect(consoleErrors).toEqual([]);
    await expect(page).toHaveScreenshot(`home-${width}.png`, { fullPage: true });
  });
}

test('home: reduz movimento sem alterar o conteúdo essencial', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.locator('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
