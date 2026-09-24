import {test,expect} from '@playwright/test'
import { title } from 'node:process';

test('E2E Testing for Saucedemo', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const username=page.locator('#user-name');
    const password=page.locator('#password');
    const loginButton=page.locator('#login-button');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await loginButton.click('login-button');

    /*Assertion*/
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    //-----------------------------------------------------------------------------------

    await page.goto('https://www.saucedemo.com/inventory.html');

    const backpack=page.locator('#add-to-cart-sauce-labs-backpack');
    const bikelight=page.locator('#add-to-cart-sauce-labs-bike-light');
    const boltTshirt=page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    const jacket=page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    const junior=page.locator('#add-to-cart-sauce-labs-onesie');
    const redTshirt=page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)');
    const cart=page.locator('#shopping_cart_container');

    await backpack.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); /*Assertion*/
    await cart.click();

    //-----------------------------------------------------------------------------------

    await page.goto('https://www.saucedemo.com/cart.html');

    const checkout=page.locator('#checkout');
    await expect(page.locator('.title')).toHaveText('Your Cart'); /*Assertion*/
    await checkout.click();

    //----------------------------------------------------------------------------------

    await page.goto('https://www.saucedemo.com/checkout-step-one.html');

    const firstName=page.locator('#first-name');
    const lastName=page.locator('#last-name');
    const zip=page.locator('#postal-code');
    const continueButton= page.locator('#continue');

    //const dynamicFirstName =`User${Date.now()}`;

    await firstName.fill(dynamicFirstName);
    await lastName.fill('Sen');
    await zip.fill('10347');
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information'); /*Assertion*/
    await continueButton.click();

    //----------------------------------------------------------------------------------

    await page.goto('https://www.saucedemo.com/checkout-step-two.html');

    const finishButton=page.locator('#finish');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');   /*Assertion*/
    await finishButton.click();

    //----------------------------------------------------------------------------------

    await page.goto('https://www.saucedemo.com/checkout-complete.html');

    const backHomeButton=page.locator('#back-to-products');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');   /*Assertion*/
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    await backHomeButton.click();

})