import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

// let page = pageFixture.page;

Then("I click on New Post button", async function () {
  await pageFixture.page.locator('a[href="#editor"]').click();
});

Then("I fill up the required fields", async function () {
  await pageFixture.page
    .getByPlaceholder("Article Title")
    .fill("This is a test article");
  await pageFixture.page
    .getByPlaceholder("What's this article about?")
    .fill("This is about test article");
  await pageFixture.page
    .getByPlaceholder("Write your article (in markdown)")
    .fill("This is a test article in markdown");
  await pageFixture.page.getByPlaceholder("Enter tags").fill("test");
});

Then("I publish the post", async function () {
  await pageFixture.page.locator('//button[text()="Publish Article"]').click();
});

// this step is not working
Then("I should see the Article posted", async function () {
  await expect(
    await pageFixture.page.locator("h1", { hasText: "This is a test article" })
  ).toBeVisible();
});
