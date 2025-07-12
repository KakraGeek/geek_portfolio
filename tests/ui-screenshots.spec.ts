import { test } from '@playwright/test';

test('homepage screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
});

test('about page screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await page.screenshot({ path: 'test-results/about.png', fullPage: true });
});

test('contact page screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await page.screenshot({ path: 'test-results/contact.png', fullPage: true });
});
