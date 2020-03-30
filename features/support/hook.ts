import { After, BeforeAll, Before, Status } from "cucumber";
import { browser } from "protractor";

After(async function (scenario){
    console.log(scenario.result.status);
        let src=await browser.takeScreenshot();
        this.attach(src,"image/png");
    
})

Before(async function (scenario){
    console.log(scenario.sourceLocation.uri);
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
})




