# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login Using Valid Credentials 
- Location: tests\LoginPage.spec.js:4:6

# Error details

```
ReferenceError: loginpage is not defined
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | 
  4  | test.only('Login Using Valid Credentials ', async ({page})=>{
  5  |    /* await page.goto('https://www.saucedemo.com/');
  6  | 
  7  |     const username= page.locator('#user-name');
  8  |     const password= page.locator('#password');
  9  |     const loginButton= page.locator('#login-button');*/
  10 | 
  11 |     /*await username.fill('standard_user');
  12 |     await password.fill('secret_sauce');
  13 |     await loginButton.click();
  14 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');*/
  15 | 
  16 |     //const loginpage= new LoginPage(page)
  17 |     //await loginpage.navigateToApplication();
> 18 |     await loginpage.applicationLogin();
     |     ^ ReferenceError: loginpage is not defined
  19 |     await loginpage.verifyInventoryPage();
  20 | })
  21 | 
  22 | test('Login Using Invalid Credentials ', async ({page})=>{
  23 |     await page.goto('https://www.saucedemo.com/');
  24 | 
  25 |     const username= page.locator('#user-name');
  26 |     const password= page.locator('#password');
  27 |     const loginButton= page.locator('#login-button');
  28 | 
  29 |     await username.fill('Astandard_user');
  30 |     await password.fill('Asecret_sauce');
  31 |     await loginButton.click();
  32 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
  33 | })
  34 | 
  35 | test('Login Using Valid Username and Invalid Passsword ', async ({page})=>{
  36 |     await page.goto('https://www.saucedemo.com/');
  37 | 
  38 |     const username= page.locator('#user-name');
  39 |     const password= page.locator('#password');
  40 |     const loginButton= page.locator('#login-button');
  41 | 
  42 |     await username.fill('standard_user');
  43 |     await password.fill('Asecret_sauce');
  44 |     await loginButton.click();
  45 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
  46 |     
  47 | })
  48 | 
  49 | test('Login Using Invalid Username and Valid Passsword ', async ({page})=>{
  50 |     await page.goto('https://www.saucedemo.com/');
  51 | 
  52 |     const username= page.locator('#user-name');
  53 |     const password= page.locator('#password');
  54 |     const loginButton= page.locator('#login-button');
  55 | 
  56 |     await username.fill('Astandard_user');
  57 |     await password.fill('secret_sauce');
  58 |     await loginButton.click();
  59 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
  60 |     
  61 | })
  62 | 
  63 | 
```