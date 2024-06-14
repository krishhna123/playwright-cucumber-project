import {
  After,
  AfterAll,
  AfterStep,
  Before,
  BeforeAll,
  BeforeStep,
  Status,
} from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;
let context: BrowserContext;

Before(async function () {
  context = await browser.newContext();
  page = await browser.newPage();
  //@ts-ignore
  pageFixture.page = page;
});

After(async function ({ pickle, result }) {
  if (result?.status == Status.FAILED) {
    const image = await pageFixture.page.screenshot({
      path: `./test-result/screenshots/${pickle.name}.png`,
    });
    await this.attach(image, "image/png");
  }
  await page.close();
  await context.close();
});

BeforeAll(async function () {
  browser = await chromium.launch();
});

AfterAll(async function () {
  console.log("Closing the browser");
  await browser.close();
});

BeforeStep(async function () {
  console.log("Starting a new step");
});

AfterStep(async function () {
  console.log("Ending a step");
});
