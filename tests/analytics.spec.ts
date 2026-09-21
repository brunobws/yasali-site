import { test, expect } from '@playwright/test';

test('starter não carrega analytics nem solicita tags externas sem IDs', async ({ page }) => {
  const externalRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().startsWith('http') && !request.url().startsWith('http://127.0.0.1:4329')) {
      externalRequests.push(request.url());
    }
  });

  await page.goto('/');
  await expect(page.locator('[data-vw-analytics-root]')).toHaveCount(0);
  expect(externalRequests).toEqual([]);
});
