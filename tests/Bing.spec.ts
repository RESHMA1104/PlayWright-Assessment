import { test, expect } from '@playwright/test';

test('Bing', async ({ page }) => {
  await page.goto('https://www.bing.com/');
  const title = page.title();
  console.log(title);
  const currentUrl = page.url();
  console.log("Current Url : ", currentUrl);
  await expect(page).toHaveTitle("Search - Microsoft Bing");
  await expect(page).toHaveURL("https://www.bing.com/")
  const innertext = await page.locator("#id_s").innerText();
  console.log("Get Inner Text : ", innertext);
  const GetAttribute = await page.getAttribute("#sb_form_q", 'type');
  console.log("Get Attribute : ", GetAttribute);
  await page.locator("#sb_form_q").fill("PlayWright");
  const pw = page.locator("//h2[text() = 'Playwright']");
  await expect(pw).toHaveText("Playwright");
});