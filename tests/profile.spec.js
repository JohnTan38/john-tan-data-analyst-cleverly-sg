const { test, expect } = require('@playwright/test');

test.describe('John Tan — Cleverly SG Data Analyst Profile Website', () => {
  test('renders hero, Cleverly SG branding, and glassmorphism layout without console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await expect(page).toHaveTitle(/John Tan \| Data Analyst Portfolio — CLEVERLY SG PTE LTD/);
    await expect(page.locator('h1')).toContainText('Transparent SME ROI');
    await expect(page.locator('#role-fit-grid article')).toHaveCount(6);
    expect(errors).toEqual([]);
  });

  test('displays tile pop-up inspector card on mouse hover', async ({ page }) => {
    await page.goto('/');
    const popup = page.locator('#tile-hover-popup');
    await expect(popup).toBeHidden();

    const firstTile = page.locator('#tile-resp-1');
    await firstTile.hover();
    await expect(popup).toBeVisible();
    await expect(page.locator('#popup-title')).toContainText('Collect, Clean & Analyse Multi-Channel Data');
  });

  test('supports intuitive search auto-complete and tile filtering', async ({ page }) => {
    await page.goto('/');
    const searchInput = page.locator('#global-search-input');
    const dropdown = page.locator('#search-autocomplete-list');

    await searchInput.click();
    await expect(dropdown).toBeVisible();

    await searchInput.fill('Prophet');
    await expect(dropdown).toContainText('Streamlit_Prophet_1');
    await expect(page.locator('#active-filter-banner')).toBeVisible();

    await page.locator('#clear-search-btn').click();
    await expect(page.locator('#active-filter-banner')).toBeHidden();
  });

  test('updates interactive Cleverly SG KPI dashboard and ROI simulator', async ({ page }) => {
    await page.goto('/');
    const channelSelect = page.locator('#dashboard-channel-select');
    await channelSelect.selectOption('seo');
    await expect(page.locator('#kpi-roas')).toHaveText('7.4x');

    const modalBtn = page.locator('#open-resume-modal-btn');
    await modalBtn.click();
    await expect(page.locator('#resume-modal')).toBeVisible();
    await page.locator('[data-modal-page="3"]').click();
    await page.locator('#close-resume-modal-btn').click();
    await expect(page.locator('#resume-modal')).toBeHidden();
  });

  test('provides downloadable 3-page resume PDF with valid base64 data URI', async ({ page }) => {
    await page.goto('/');
    const dlLink = page.locator('#hero-download-resume-btn');
    await expect(dlLink).toHaveAttribute('download', 'John_Tan_Resume_Data_Analyst_Cleverly_SG.pdf');
    const href = await dlLink.getAttribute('href');
    expect(href).toMatch(/^data:application\/pdf;base64,JVBERi0/);
  });
});
