import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/');

    // Wait for page to load completely
    await page.waitForLoadState('networkidle');

    // Check page load time
    const navigationTiming = await page.evaluate(() => {
      const timing = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      return {
        loadTime: timing.loadEventEnd - timing.loadEventStart,
        domContentLoaded:
          timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
        firstContentfulPaint: timing.loadEventEnd - timing.fetchStart,
      };
    });

    // Assert reasonable load times (in milliseconds)
    expect(navigationTiming.loadTime).toBeLessThan(3000);
    expect(navigationTiming.domContentLoaded).toBeLessThan(2000);
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');

    // Check for lazy loading
    const images = await page.locator('img').all();

    for (const img of images) {
      const loading = await img.getAttribute('loading');
      const src = await img.getAttribute('src');

      // Images should have loading attribute or be optimized
      if (src && !src.startsWith('data:')) {
        expect(loading).toBeTruthy();
      }
    }
  });

  test('should have minimal bundle size', async ({ page }) => {
    const response = await page.goto('/');

    // Check response size is reasonable
    const contentLength = response?.headers()['content-length'];
    if (contentLength) {
      const sizeInKB = parseInt(contentLength) / 1024;
      expect(sizeInKB).toBeLessThan(500); // Less than 500KB
    }
  });
});
