const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^I have matrix dev site$/, function() {
    return true;
  });
  When(/^I login with "(.*)" and "(.*)"$/, function(param1, param2) {
    return true;
  });
  Then(/^I must be logged in successfully$/, function() {
    return true;
  });
});
