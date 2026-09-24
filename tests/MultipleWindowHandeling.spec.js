import {test, expect} from'@playwright/test'
test ('Multiple Window Handeling', async({page,context})=>{
    await page.goto('https://demo.guru99.com/popup.php');

    const newWindow= context.waitForEvent('page'); // its starts for waiting new window

    await page.locator("//a[text()='Click Here']").click();

    const popup= await newWindow;
    await popup.waitForLoadState();

    //for second window we need to use popup.locator insted of page.locator
    // Here we are handeling the second window
    const mail=popup.locator("//input[@name='emailid']");
    mail.fill('abcd@gmail.com');

    /* OR method
    await popup.locator("//input[@name='emailid']").fill('abcd@gmail.com'); */ 

    await popup.locator("//input[@type='submit']").click();

})