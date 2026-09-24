// always import playwright testRunner
import {test} from '@playwright/test' // this will help us to write the TC's

// now the below is creating browser instance
test('Browser Launch in Playwright',async({browser})=>{
const context= await browser.newContext()
const page= await context.newPage() // new page creation
await page.goto('https://selenium.qabible.in/')
})



// Context fixture:  for creating incogneto window
// page fixture: for single page handeling
// request fixture: to handle API request
// test.only for running selectively one Test use only
test.only('Page Playwright Test', async({page})=>{
    await page.goto('https://selenium.qabible.in/')
}) 
