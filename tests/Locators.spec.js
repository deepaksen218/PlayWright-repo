import {test} from '@playwright/test'

test('Locators in Playwright', async ({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php');

    /*// locating an element with Id , here ID is represented with '#'*/
    const messageBox=page.locator('#single-input-field');

    /*// locating an element with Class, here class is represented with '.'*/
     const valueBoxA=page.locator('.form-control');

    /* // locating an element with Xpath, //Tagname[@Attribute='Value']*/
     const showMessageButton=page.locator("//button[@id='button-one']");

     await messageBox.fill('Deepak');

     await messageBox.fill("Alan");

     await showMessageButton.click();

})

test.only('Special Locators', async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login');

   const username= page.locator("//input[@name='username']");
   await username.fill("admin");

   const password= page.locator("//input[@name='password']");
   await password.fill("admin");

   const signinButton= page.locator("//button[@type='submit']");
   await signinButton.click();

   await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin');

   //await page.getByRole('button',{name:'Active'}).nth(0).click();

   await page.getByText('Active').first().click();

   

})