import {test} from '@playwright/test'

test('DropDown in Playwright', async({page})=>{

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    const dropdown=page.locator('#dropdowm-menu-1');
    //await dropdown.selectOption({index:1});

    //await dropdown.selectOption({value:'python'});

    await dropdown.selectOption({label:'SQL'});

})

test.only('CheckBox in Playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    const checkbox=page.locator("//input[@value='option-2']");
    await checkbox.check();
    await checkbox.uncheck(); // here we can use click()-method for checkbox and uncheck

    // Assignment: Radio button : click()
    const radiobutton=page.locator("//input[@value='blue']")
    await radiobutton.click();
})