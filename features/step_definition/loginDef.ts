import { Given, When, Then } from "cucumber";
import {browser} from 'protractor'

    Given('I have matrix dev site', async function () {
        // Write code here that turns the phrase above into concrete actions
        console.log('Hi Ankain..');
        //await browser.waitForAngularEnabled(false);
        console.log(browser.baseUrl);
        await browser.get(browser.baseUrl);
       // await browser.manage().window().maximize();
      });

      When('I login with {string} and {string}', async function (user:string, pass:string) {
        // Write code here that turns the phrase above into concrete actions
        console.log(`${user}:${pass}`)
      });
      Then('I must be logged in successfully', function () {
        console.log('Adding the step')
      });