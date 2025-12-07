import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');

    // Check home page
    await expect(page.getByText('Mokwa')).toBeVisible();

    // Navigate to about
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page.getByText('About Me')).toBeVisible();

    // Navigate to projects
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page.getByText('Projects')).toBeVisible();

    // Navigate to contact
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page.getByText('Get In Touch')).toBeVisible();

    // Navigate to blog
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page.getByText('Blog')).toBeVisible();
  });

  test('should have working external links', async ({ page, context }) => {
    await page.goto('/contact');

    // Test GitHub link opens in new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page
        .getByRole('link', { name: /github/i })
        .first()
        .click(),
    ]);

    expect(newPage.url()).toContain('github.com');
  });
});
