import { test, expect } from "@playwright/test";

const elements = [
  {
    locator: (page) => page.getByRole("link", { name: "GitHub repository" }),
    name: "playwright logo",
  },
  {
    locator: (page) => page.getByRole("link", { name: "Discord server" }),
    name: "playwright logo link",
  },
  {
    locator: (page) =>
      page.getByRole("button", { name: "Switch between dark and light" }),
  },
  {
    locator: (page) =>
      page.getByRole("heading", { name: "Playwright enables reliable" }),
  },
  {
    locator: (page) => page.getByRole("link", { name: "Get started" }),
  },
];

test.describe("тесты главной cтраницы", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("проверка атрибута href элементов навигации хедера", async ({
    page,
  }) => {
    test.step("проверка ссылок header", async () => {
      await expect(
        page.getByRole("link", { name: "GitHub repository" })
      ).toHaveAttribute("href", "https://github.com/microsoft/playwright");

      await expect(
        page.getByRole("link", { name: "Discord server" })
      ).toHaveAttribute("href", "https://aka.ms/playwright/discord");
    });
  });

  test("проверка light mode header", async ({ page }) => {
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });

  test("првоерка заголовка на странице", async ({ page }) => {
    test.step("проверка отображения текста на странице", async () => {
      await expect(
        page.getByRole("heading", { name: "Playwright enables reliable" })
      ).toBeVisible();
    });

    await expect(
      page.getByRole("heading", { name: "Playwright enables reliable" })
    ).toContainText(
      "Playwright enables reliable end-to-end testing for modern web apps."
    );
  });

  test('проверка кнопки "GET STARTED"', async ({ page }) => {
    await expect
      .soft(page.getByRole("link", { name: "Get started123" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Get started" }))
      .toContainText("Get started");
    await expect
      .soft(page.getByRole("link", { name: "Get started" }))
      .toHaveAttribute("href", "/docs/intro");
  });

  ["light", "dark"].forEach((val) => {
    test(`проверка стилей активного мода ${val}`, async ({ page }) => {
      await page.evaluate((val) => {
        document.querySelector("html")?.setAttribute("data-theme", val);
      }, val);
      await expect(page).toHaveScreenshot(`pageWith${val}mode.png`);
    });
  });
});

// метод .soft делает мягкое утверждение, тоесть после проваленного теста идет дальше
// хук beforeEach выполняет действие перед началом тестов
// анотация skip игнорирует тест (пропускает тест)
// анотация fixme горит о том что - с тестом какие-то проблемы он просто пропускается. это пометка для себя, что тест надо фиксануть
// анотация fail говорит - что тест был упавшим и мы об этом знаем, поэтому он будет passed даже если сломан
// анотация only выделяет один тест который мы будем запускать (удобно во время разработки)
// .step делает шаг теста

// &&&&&&&&&&&&&&&$$$%#@@#$%^^&&&*******************************************//

//

//

//

//

//

//

//
// test.beforeEach(async ({ page }) => {
//   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
// });

// test("проверка отображения элементов навигации header", async ({ page }) => {
//   // Recording...
//   await expect(page.getByText("GREENKART", { exact: true })).toBeVisible();
//   await expect(
//     page.getByRole("searchbox", { name: "Search for Vegetables and" })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("button").filter({ hasText: /^$/ })
//   ).toBeVisible();
//   await expect(page.getByRole("link", { name: "Top Deals" })).toBeVisible();
//   await expect(
//     page.getByRole("link", { name: "Flight Booking" })
//   ).toBeVisible();
//   await expect(page.getByRole("link", { name: "Cart" })).toBeVisible();
// });

// test("проверка названий элементов hedaer", async ({ page }) => {
//   await expect(page.getByRole("banner")).toContainText("GREENKART");
//   await expect(page.getByRole("link", { name: "Top Deals" })).toContainText(
//     "Top Deals"
//   );

//   await expect(page.getByRole("banner")).toContainText("Flight Booking");
//   await expect(page.getByRole("rowgroup")).toContainText("Items");
//   await expect(page.getByRole("rowgroup")).toContainText("Price");
// });
