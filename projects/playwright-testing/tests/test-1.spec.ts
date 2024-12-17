import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://getbootstrap.com/');
  await page.getByAltText('Bootstrap', { exact: true }).click();
  await page.getByLabel('Search (Ctrl+K)').click();
  await page.getByPlaceholder('Search docs').fill('hola');
  await page.getByLabel('Clear the query').click();
  await page.getByPlaceholder('Search docs').press('Escape');
  await page.locator('#content').getByRole('button', { name: 'Copy' }).click();
  await page.getByText('crossorigin').first().click();
});