
const cucumber= require('cucumber');
const { browser } = require('protractor');
const { After } = require('cucumber');
require('dotenv').config();
exports.config = {
    seleniuAddress: process.env.ADDRESS,
    baseUrl: "https://www.google.com",
    //seleniumArgs: ['-Dwebdriver.ie.driver=../Drivers/IEDriverServer.exe'],
    capabilities: {
        'browserName': process.env.BROWSER || 'chrome',
        'shardTestFiles': false,
        'maxInstances': process.env.MAX_INSTANCE || 1,
        'chromeOptions': {
            args: ["--disable-gpu", "--disable-notifications", "--disable-infobars","--headlesss"]
        }
    },
    directConnect: true,
    restartBrowserBetweenTests: false,
    allScriptsTimeout: 30000,
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: process.env.FEATURE || ['features/**/*.feature'],
    cucumberOpts: {
        require: ['features/**/*.ts'], // loads step definitions
        format: ['progress-bar', 'json:./test/cucumber_report.json'],// enable console output
        'require-module': ['ts-node/register'],
        tags: '@smoke'// interpret step definitions as TypeScript
    },
    // serenity: {
    //     crew: [
    //         ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
    //         ConsoleReporter.forDarkTerminals(),
    //         Photographer.whoWill(TakePhotosOfInteractions),     // or Photographer.whoWill(TakePhotosOfFailures),
    //         new SerenityBDDReporter(),
    //     ],
    //     runner: 'cucumber',
    //     stageCueTimeout: 30 * 1000 // up to 30 seconds by default
    // },
    // onPrepare: async function(){
    //     await browser.manage().window().maximize();
    // }
    AfterAll: function(){
        browser.driver.quit();
    },
   
};


















