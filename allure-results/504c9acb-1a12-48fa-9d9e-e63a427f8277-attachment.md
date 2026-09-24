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

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: Astandard_user
      - textbox "Password" [ref=e15]: Asecret_sauce
      - heading [level=3] [ref=e19]:
        - button [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
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
  16 |         // For data protuction we cant use directly the username and password
  17 |         // so here we can either fetch username and password from EXCEL sheet or from JSON  
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