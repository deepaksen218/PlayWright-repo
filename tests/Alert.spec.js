import {test, expect} from '@playwright/test'

test('Handeling Alert', async({page})=>{

    await page.goto('https://selenium.qabible.in/javascript-alert.php');

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe('I am a Javascript alert box!'); // Assertion: were verifying the message in dialog box are same
        await dialog.accept();

        const clickmeButton=page.locator('.btn btn-success');
        await clickmeButton.click();
    })

})