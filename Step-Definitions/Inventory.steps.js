import { Given, When, Then, Before, After, BeforeAll , AfterAll, BeforeStep, AfterStep, Status, setDefaultTimeout, context } from "@cucumber/cucumber";
import { chromium } from "playwright/test";
import assert from "assert";

// trying to increase the timout
setDefaultTimeout(30000);

let browser
let toContext
let page

BeforeAll(async function(){
    browser = await chromium.launch({headless: false, slowMo:300})
})

AfterAll(async function(){
    if(browser){
        await browser.close();
    }
})

Before(async function(){
    context=  await browser.newContext();
    page = await context.newPage();
})

After(async function(Scenario) 
{
    try {
        if(Scenario.result.status===Status.FAILED){
            const screenshot= await page.screenshot()
            this.attach(screenshot,'image/page')
        }
        
    }   
    catch(err){
        console.log('After hook error:', err.message)
    }
    finally{
        if(context){
            await context.close()
        }
    }
})


BeforeStep(async function(){
    console.log('Executing new Step');
})

AfterStep(async function () {
    console.log('Step Execution Completed');
})
Given , When ,Then 