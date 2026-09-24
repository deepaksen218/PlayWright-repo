import{test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import data from '../Utils/LoginCredentials.json'

test('Login Using Valid Credentials ', async ({page})=>{
   /* await page.goto('https://www.saucedemo.com/');

    const username= page.locator('#user-name');
    const password= page.locator('#password');
    const loginButton= page.locator('#login-button');*/

    /*await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');*/

    const validusername= data.validusername;
    const validpassword= data.validpassword;
    const loginpage= new LoginPage(page);
    await loginpage.navigateToApplication();
    await loginpage.applicationLogin(validusername, validpassword );
    await loginpage.verifyInventoryPage();
})

                            //   DO it for other TEste cases

test('Login Using Invalid Credentials ', async ({page})=>{
    /*await page.goto('https://www.saucedemo.com/');

    const username= page.locator('#user-name');
    const password= page.locator('#password');
    const loginButton= page.locator('#login-button');

    await username.fill('Astandard_user');
    await password.fill('Asecret_sauce');
    await loginButton.click();
    await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');*/

    const invalidusername= data.invalidusername;
    const invalidpassword=data.invalidpassword;
    const loginpage= new LoginPage(page);
    await loginpage.navigateToApplication();
    await loginpage.applicationLogin(invalidusername, invalidpassword );
    await loginpage.verifyErrorMessage();
})

test('Login Using Valid Username and Invalid Passsword ', async ({page})=>{
    /*await page.goto('https://www.saucedemo.com/');

    const username= page.locator('#user-name');
    const password= page.locator('#password');
    const loginButton= page.locator('#login-button');

    await username.fill('standard_user');
    await password.fill('Asecret_sauce');
    await loginButton.click();
    await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');*/

    const validusername= data.validusername;
    const invalidpassword= data.invalidpassword;
    const loginpage=new LoginPage(page);
    await loginpage.navigateToApplication();
    await loginpage.applicationLogin(validusername, invalidpassword);
    await loginpage.verifyErrorMessage();
    
})

test('Login Using Invalid Username and Valid Passsword ', async ({page})=>{
    /*await page.goto('https://www.saucedemo.com/');

    const username= page.locator('#user-name');
    const password= page.locator('#password');
    const loginButton= page.locator('#login-button');

    await username.fill('Astandard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');*/

    const invalidusername= data.invalidusername;
    const validpassword= data.validpassword;
    const loginpage= new LoginPage(page);
    await loginpage.navigateToApplication();
    await loginpage.applicationLogin(invalidusername, validpassword);
    await loginpage.verifyErrorMessage();
    
    
})

