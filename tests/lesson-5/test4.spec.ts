import {test} from "@playwright/test";

test("Get text from Vnexpress web" , async({page}) =>{
    let titles ,contents;
    await test.step("Navigate to page Vnexpress" , async() =>{
        await page.goto("https://vnexpress.net/",{waitUntil:'domcontentloaded'});
        titles = await page.locator("//h3[@class='title-news']").allTextContents();
        contents = await page.locator("(//p[@class='description'])").allTextContents();
    })

    await test.step("Navigate to page" , async() =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click on link", async() =>{
        await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
    })

    await test.step("add details and create note ",async()=>{
        for (let i=0 ; i<10 ;i++){
            await page.locator("//input[@id='note-title']").fill(titles[i]);
            await page.locator("//textarea[@id='note-content']").fill(contents[i]);
            await page.locator("//button[@id='add-note']").click();
        }
    })
} )