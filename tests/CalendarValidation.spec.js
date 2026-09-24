import {test, expect} from '@playwright/test'
test ('Calender Validation', async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php');

    const dateInput=page.locator('#single-input-field');
    await dateInput.click();

    const targetYear= 1997;
    await expect(page.locator('.datepicker-dropdown')).toBeVisible(); // Assertion: ensuring the visibility of calender

    const monthYearButton=page.locator('.datepicker-switch:visible'); 
    // here we only need the elements which are visible to ignore the hidden elements
    await monthYearButton.click();
    await monthYearButton.click();

    let attempt=10; // here we neeed to find the year so we are trying to find the target year
    while(attempt--){
        const decadeText=await monthYearButton.innerText(); // DECADE means 2020-2029
        const startYear= parseInt(decadeText.split('-')[0].trim());
        // here it will trim and we only need 2020, because in 0the position we have 2020

        if(targetYear>=startYear && targetYear<=startYear+9)
            {
                break
            }
            await page.locator('.prev:visible').click();
            
    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click(); // selecting Year
    await page.locator('.month:visible').filter({hasText:'Aug'}).click(); // selecting Month
    // for dates we need to specify because we old days with 2 or new days with 2, to avoid that.
    await page.locator('.day:not(.old):not(.new)',{hasText:/^2$/}).click();

    const showDate=page.locator('#button-one');
    await showDate.click();

    // await page.locator('#button-one').click()


})