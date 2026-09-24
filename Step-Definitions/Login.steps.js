import { Given, When, Then, After } from "@cucumber/cucumber";
import assert  from 'assert';
import { chromium} from "playwright/test";

let browser;
let page;

// NOTE: -- it should be exactly the same as in LoginFeature file
Given('The user is on loginpage', async function(){

    browser= await chromium.launch({headless: false});
    page= await browser.newPage();

    await page.goto('https://www.saucedemo.com/')
}) 

// ----------VALID LOGIN------------

When('User enters in the login page', async function() {

    const usernamefield = page.locator('#user-name');
    const passwordfield = page.locator('#password');
    const loginButton = page.locator('#login-button');

    await usernamefield.fill('standard_user');
    await passwordfield.fill('secret_sauce');
    await loginButton.click();

})

Then('The inventory page should be displayed', async function() {
    await page.locator('.inventory_item').first().isVisible();
})


// ----------INVALID LOGIN------------

When('User enters invalid credentials', async function(){

    const usernamefield = page.locator('#user-name');
    const passwordfield = page.locator('#password');
    const loginButton = page.locator('#login-button');

    await usernamefield.fill('Astandard_user')
    await passwordfield.fill('Asecret_sauce');
    await loginButton.click();

})

Then('An error message should be displayed', async function() {
    const error= await page.locator('[data-test="error"]').textContent();
    assert.ok(error.includes('Username and password do not match'));
    await browser.close();

})