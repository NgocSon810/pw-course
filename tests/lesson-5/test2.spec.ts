import {test} from "@playwright/test";

test("Bài học 2: Product page" , async({page}) =>{
    
    await test.step("Navigate to page" ,async() =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click on the link Bài học 2: Product page" , async() =>{
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    })

    await test.step("Add product 1 to cart", async() => {
        await page.locator("(//button[@class='add-to-cart'][normalize-space()='Add to Cart'])[1]").click({clickCount : 2});
    })

    await test.step("Add product 2 to cart", async() => {
        await page.locator("(//button[@class='add-to-cart'][normalize-space()='Add to Cart'])[2]").click({clickCount : 3});
    }) 

    await test.step("Add product 3 to cart", async() => {
        await page.locator("(//button[@class='add-to-cart'][normalize-space()='Add to Cart'])[3]").click();
    }) 
}) 