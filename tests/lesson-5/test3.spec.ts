import {test} from "@playwright/test";

test("Bài học 3: Todo page" , async({page}) =>{

    await test.step("Navigate to link" , async() => {
        await page.goto("https://material.playwrightvn.com/");
    })
    
    await test.step("Click on the link Bài học 3: Todo page" , async() =>{
        await page.locator("//a[contains(text(),'Bài học 3: Todo page')]").click();
    })

    await test.step("Add 100 new task" , async()=>{
        for ( let i = 1; i<=100 ; i++){
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    })

    await test.step("Remove", async() =>{
        page.on("dialog" , async dialog =>{
            await dialog.accept();
        });
        for(let i=1 ; i<=100 ; i++){
            if (i % 2 !==0){
                await page.locator(`//button[@id='todo-${i}-delete']`).click();
            }
        }
    })
    
})