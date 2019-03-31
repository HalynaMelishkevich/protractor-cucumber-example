const {Given} = require('cucumber');

Given(/^I go to (.*)$/, async function (site) {
    await browser.get(site);
});