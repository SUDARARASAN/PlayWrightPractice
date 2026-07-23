import {test,expect} from "@playwright/test";

// This hook runs automatically before every test block in this file
test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/tests/app.html");
});

test("This is my first test on practice -TC001- Verify the page is loaded using title of the page", async ({ page }) => {
    // Check the page got loaded using title
    await expect(page).toHaveTitle("Playwright Locators Demo");
});

test("This is my first test on practice -TC002- Verify the page is loaded using Page Heading", async ({ page }) => {
    // Check the page got loaded using heading
    await expect(page.getByRole('heading', { name: 'Playwright Locators Demonstration' })).toBeVisible();
});

test("This is my first test on practice -TC003- Locate button elements by their implicit ARIA roles using getByRole() Locators .", async ({ page }) => {
   await expect(page.getByRole('heading',{name:/buttons/i})).toBeVisible
    await page.getByRole('button', {name: 'Primary Action'}).click();
    await page.getByRole('button', {name: /toggle Button/i }).click();
    
});
