import{expect} from '@playwright/test'
export class LoginPage{
    constructor(page){
        this.page= page;
        this.usernamefield= page.locator('#user-name'); // Chnage to username= usernamefield
        this.passwordfield= page.locator('#password'); // Chnage to password= passwordfield
        this.loginButton= page.locator('#login-button');
    }
    async navigateToApplication(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async applicationLogin(username, password){
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password); 
        // For data protuction we cant use directly the username and password
        // so here we can either fetch username and password from EXCEL sheet or from JSON  
        await this.loginButton.click();
    }
    async verifyInventoryPage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
    async verifyErrorMessage(){
        await expect(this.page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
    }

}