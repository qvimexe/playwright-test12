import { test, expect } from "@playwright/test";

test("проверка отображения элементов навигации header", async ({ page }) => {
  // Recording...
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
  await expect(page.getByText("GREENKART", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("searchbox", { name: "Search for Vegetables and" })
  ).toBeVisible();
  await expect(
    page.getByRole("button").filter({ hasText: /^$/ })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Top Deals" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Flight Booking" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Cart" })).toBeVisible();
});

test("проверка названий элементов hedaer", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  await expect(page.getByRole("banner")).toContainText("GREENKART");
  await expect(page.getByRole("link", { name: "Top Deals" })).toContainText(
    "Top Deals"
  );

  await expect(page.getByRole("banner")).toContainText("Flight Booking");
  await expect(page.getByRole("rowgroup")).toContainText("Items");
  await expect(page.getByRole("rowgroup")).toContainText("Price");
});

test("проверка атрибута href элементов навигации хедера", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("link", { name: "GitHub repository" })
  ).toHaveAttribute("href", "https://github.com/microsoft/playwright");

  await expect(
    page.getByRole("link", { name: "Discord server" })
  ).toHaveAttribute("href", "https://aka.ms/playwright/discord");
});

test("проверка light mode header", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page
    .getByRole("button", { name: "Switch between dark and light" })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("првоерка заголовка на странице", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("heading", { name: "Playwright enables reliable" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Playwright enables reliable" })
  ).toContainText(
    "Playwright enables reliable end-to-end testing for modern web apps."
  );
});

test('проверка кнопки "GET STARTED"', async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toBeVisible();
  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toContainText("Get started");
  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toHaveAttribute("href", "/docs/intro");
});

// метод .soft делает мягкий утверждение то есть после провеланеого теста идет дальше
