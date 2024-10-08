import {test} from '@playwright/test';
const linkpage = "https://material.playwrightvn.com/";

test ("Bài học 1: Register Page",async ({page}) =>{
    await test.step("Open link" ,async ()=>{
        await page.goto(linkpage);
    })

    await test.step("Click link Bài học 1: Register Page (có đủ các element)",async()=>{
        await page.locator("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]").click();

    })
    await test.step("Fill all details", async()=>{
        await page.locator("//input[@id='username']").fill("Son");
        await page.locator("//input[@id='email']").fill("ngocson810@gmail.com");
        await page.locator("//input[@id='male']").click();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='interests']").selectOption(["Technology","Science"]);
        await page.locator("//select[@id='country']").selectOption("United States");
        await page.locator("//input[@id='dob']").fill("1994-10-08");
        await page.locator("//textarea[@id='bio']").fill("Test1");
        await page.locator("//input[@id='rating']").fill("7");
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//span[@class='slider round']").click();
    })
    
    await test.step("Click on register", async() =>{
        await page.locator("//button[normalize-space()='Register']").click();
    })
    
})