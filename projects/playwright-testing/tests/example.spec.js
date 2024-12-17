// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const getStartedLink = page.locator('text=Get Started')

  await expect(getStartedLink).toHaveAttribute('href', '/docs/intro')

  await getStartedLink.click();
  // Click the get started link.
  // await page.getByRole('link', { name: 'Get Started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});