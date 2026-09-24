# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login Using Invalid Credentials 
- Location: tests\LoginPage.spec.js:27:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import{expect} from '@playwright/test'
  2  | export class LoginPage{
  3  |     constructor(page){
  4  |         this.page= page;
  5  |         this.usernamefield= page.locator('#user-name'); // Chnage to username= usernamefield
  6  |         this.passwordfield= page.locator('#password'); // Chnage to password= passwordfield
  7  |         this.loginButton= page.locator('#login-button');
  8  |     }
  9  |     async navigateToApplication(){
  10 |         await this.page.goto('https://www.saucedemo.com/');
  11 |     }
  12 | 
  13 |     async applicationLogin(username, password){
  14 |         await this.usernamefield.fill(username);
  15 |         await this.passwordfield.fill(password); 
  16 |         // For data protuction we cant use directly the user name and password
  17 |         // so here we can either fetch user name and password from EXCEL sheet or from JSON  
  18 |         await this.loginButton.click();
  19 |     }
  20 |     async verifyInventoryPage(){
  21 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  22 |     }
  23 |     async verifyErrorMessage(){
> 24 |         await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
     |                      ^ ReferenceError: page is not defined
  25 |     }
  26 | 
  27 | }
```