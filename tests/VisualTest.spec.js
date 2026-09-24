// testing static file

import{test,expect} from '@playwright/test'  
test('Visual Testing', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('sauseDemo.png',{
        threshold:0.2,maxDiffPixels:3700 
            // thershold: allows small colors per pixel, 
            // maxDiffPixel: intottal pixel Difference, here we got pixel error around 3572
            // maxDiffPixelRatio: represents the image Pixel ratio difference
    })

})

test.only('Visual Testing in Dynamic WebPages',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php');
    await page.waitForLoadState('networkidle');
    await page.locator('.carousel').evaluate((element)=>{
        element.style.display='none'
    })
await expect(page).toHaveScreenshot('ObsquraZone.png',{
    threshold:0.2
    })

})
