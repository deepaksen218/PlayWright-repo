# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ExcelLogin.spec.js >> login using excelsheet credentials
- Location: tests\ExcelLogin.spec.js:5:1

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import{test} from '@playwright/test';
  2  | import{getData} from '../Utils/ExcelRead';
  3  | 
  4  | 
  5  | test ('login using excelsheet credentials', async({page}) => {
  6  |     await page.goto('https://www.saucedemo.com/');
  7  |     const usernamefield= page.locator('#user-name');
  8  |     const passwordfield= page.locator('#password');
  9  |     const loginButton= page.locator('#login-button');
  10 | 
  11 |     const usernamevalue= getData(1,0);
  12 |     const passwordvalue=getData(1,0);
  13 | 
> 14 |     usernamefield.fill(usernamevalue);
     |                   ^ Error: locator.fill: value: expected string, got undefined
  15 |     passwordfield.fill(passwordvalue);
  16 |     loginButton.click();
  17 | })
```