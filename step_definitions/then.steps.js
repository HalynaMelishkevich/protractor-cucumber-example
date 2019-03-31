const {assert} = require('chai');
const {Then} = require('cucumber');

Then(/^Page title should be (.*)$/, async function (expectedTitle) {
    const actualTitle = await browser.getTitle();
    assert.deepEqual(actualTitle, expectedTitle, `Title expected to be ${expectedTitle}, but instead got ${actualTitle}`);
});


