import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

// let page = pageFixture.page;

Given("I open the login page", async function () {
  await pageFixture.page.goto("https://react-redux.realworld.io/#/login");
});

When("I fill in the login form with correct credentials", async function () {
  await pageFixture.page
    .locator('input[type="email"]')
    .fill("playwrightdemo@gmail.com");
  await pageFixture.page
    .locator('input[type="password"]')
    .fill("playwrightdemo");
});

When("I submit the login form", async function () {
  await pageFixture.page.locator('button[type="submit"]').click();
});

Then("I should see Global Feed", async function () {
  await expect(
    await pageFixture.page.locator('//a[text()="Global Feed"]')
  ).toBeVisible();
});

When(
  "I enter invalid {string} and {string}",
  async function (username, password) {
    await pageFixture.page.locator('input[type="email"]').fill(username);
    await pageFixture.page.locator('input[type="password"]').fill(password);
  }
);

Then("I should see an error message", async function () {
  const errorMessage = await pageFixture.page.locator(".error-messages");
  await expect(errorMessage).toBeVisible();
});

Then("I should see Your Feed", async function () {
  await expect(
    await pageFixture.page.locator('//a[text()="Global Feed"]')
  ).toBeVisible();
});
