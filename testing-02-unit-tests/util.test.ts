import puppeteer from "puppeteer";
import { generateText, checkAndGenerateText } from "./util";

test("should output name and age", () => {
  const text = generateText("Max", "29");
  expect(text).toBe("Max (29 years old)");
});

// import { validateInput } from "./util";
const { validateInput } = require("./util.ts");
test("Text not valid", () => {
  const validate = validateInput("Text", true, 1);
  expect(validate).toBeTruthy();
});
test("Fail input validation", () => {
  const validate = validateInput("", true, 1);
  expect(validate).toBeFalsy();
});
test("Text not valid", () => {
  const validate = validateInput("", false, 0);
  expect(validate).toBeFalsy();
});

test("should gen valid text", () => {
  const text = checkAndGenerateText("Teez0ne", "40");
  expect(text).toBe("Teez0ne (40 years old)");
});

describe("math tests", () => {
  it("1 + 1 = 2", () => {
    expect(1 + 1).toEqual(2);
  });

  it("-1 * -1 !== -1", () => {
    expect(-1 * -1).not.toBe(-1);
  });

  it("-1 lass then 1", () => {
    expect(-1 < 1).toBeTruthy();
  });
});

test("should click", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size:800,600"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.click("input#name");
  await page.type("input#name", "TeeZ0NE");
  await page.click("input#age");
  await page.type("input#age", "42");
  await page.click("#btnAddUser");
  const text = await page.$eval(".user-item", (el) => el.textContent);
  expect(text).toBe("TeeZ0NE (42 years old)");
}, 10000);
