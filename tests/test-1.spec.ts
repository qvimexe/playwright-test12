import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  await expect(page.getByText("GREENKART", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("searchbox", { name: "Search for Vegetables and" })
  ).toBeVisible();
});
