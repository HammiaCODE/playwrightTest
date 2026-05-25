import { test, expect } from "@playwright/test";

test.describe("TodoMVC testing", async () => {
  test("add new task", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    const textInp = await page.getByPlaceholder("What needs to be done?");

    textInp.fill("test 1");
    textInp.press("Enter");

    await expect(page.getByText("test 1")).toBeVisible();
    await page.screenshot({ path: "./evidence/add-task.png" });
  });

  test("complete a task", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    const textInp = await page.getByPlaceholder("What needs to be done?");
    textInp.fill("test 2");
    textInp.press("Enter");

    await page.getByRole("checkbox").check();

    await expect(page.locator(".todo-list li")).not.toHaveClass(/editing/);
    await expect(page.locator(".todo-list li")).toHaveClass(/completed/);

    await page.screenshot({ path: "./evidence/complete-task.png" });
  });

  test("delete task", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    const textInp = await page.getByPlaceholder("What needs to be done?");
    textInp.fill("test 3");
    textInp.press("Enter");

    await page.locator(".todo-list li").hover();
    await page.locator(".destroy").click();

    await expect.soft(page.getByText("Delete me")).not.toBeVisible();

    await page.screenshot({ path: "./evidence/delete-task.png" });
  });

  test.fixme("edit a task", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    //explodes or smt
  });

  test.fail("should fail", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    expect(true).toBe(false);
  });
});
