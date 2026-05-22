import { test, expect, firefox, BrowserContext, chromium } from '@playwright/test';

test.describe("Firefox", ()=>{
  test('Browser contex', async({})=>{
    const browser = await firefox.launch();
    console.log('browser context ', browser.contexts().length);
    const context : BrowserContext = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.playwright.dev/");
    console.log('browser context', browser.contexts().length);
    await browser.close();
  });
});


test.describe("Multiple pages", ()=>{
    test('Getting multiple pages', async({})=>{
        const newBrowser = await chromium.launch();
        console.log('browser context ', newBrowser.contexts().length);
        const context : BrowserContext = await newBrowser.newContext();  
        const page = await context.newPage();
        await page.goto("https://www.playwright.dev/");
        const page2 = await context.newPage();
        await page2.goto("https://www.google.com/");
        await page.screenshot({path: "./e2e/screenshots/screenshot1.png"});
        await page2.screenshot({path: "./e2e/screenshots/screenshot2.png"});
        console.log('browser context', newBrowser.contexts().length);       
    })
})

test.describe("Pages methods", ()=>{
    test('get page methods', async({})=>{
          const browser = await firefox.launch();
        console.log('browser context ', browser.contexts().length);
        const context : BrowserContext = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.playwright.dev/");
        console.log('browser context', browser.contexts().length);
        await browser.close();
    })
})