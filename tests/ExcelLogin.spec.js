import{test} from '@playwright/test';
import{getData} from '../Utils/ExcelRead';


test ('login using excelsheet credentials', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const usernamefield= page.locator('#user-name');
    const passwordfield= page.locator('#password');
    const loginButton= page.locator('#login-button');

    const usernamevalue= getData(2,1);
    const passwordvalue=getData(2,2);

    await usernamefield.fill(usernamevalue);
    await passwordfield.fill(passwordvalue);
    await loginButton.click();
})