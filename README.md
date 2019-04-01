# Test project Javascript + Protractor (+ Cucumber)

### Wanna make the same? Follow me :memo:

1. Create new empty project (f.e. in WebStorm or simply a project directory in filesystem)

2. Add package.json to project

`npm init`

3. Setup protractor 

`npm install protractor`

4. Install chai 

`npm install chai `

`npm install chai-as-promised `

5. Install browser driver (f.e. driver for Chrome) 

`npm install chromedriver `

6. Run Selenium server locally to send requests and control local browser: 
6.1. Update webdriver manager

`webdriver-manager update `

If you have this issue: https://github.com/angular/webdriver-manager/issues/351 then you should reinstall chromedriver with another version: 
```
npm uninstall chromedriver 

npm install chromedriver --chromedriver_version=2.46
```

 or Chrome browser version need to be specified manually:  

`webdriver-manager update --versions.chrome=73.0.3683.86 `
6.2. Start the server locally

`webdriver-manager start `

You can see sessions in report page locally: 
http://localhost:4444/wd/hub 
![alt text](https://i.stack.imgur.com/TdUmf.png)


7. Jasmine style: Write your spec and configuration, f.e. 

specs/spec1.js: 
```
const { assert } = require('chai'); 
 
describe('Protractor Demo App', function() { 
    it('should have a title', async function() { 
        await browser.get('http://juliemr.github.io/protractor-demo/'); 
        const title = await browser.getTitle(); 
        assert(title, 'Super Calculator', 'False'); 
    }); 
}); 
```

configurations/configuration.js: 
```
exports.config = { 
    framework: 'jasmine', 
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    specs: ['../specs/spec1.js'] 
} 
```

8. Run tests 

`protractor configurations/conf.js `

9. Cucumber style: If you want to use cucumber for BDD approach, install it: 
```
npm install --save-dev protractor-cucumber-framework 

npm install --save-dev cucumber 
```

10. Restructurize folders to have "features" forlder and "step_definitions" folder. 

11. Optional: Install prettyfier (without it there will be no output in console for successful runs) 

`npm install cucumber-pretty `

Then you need to add prettifier to cucumber format console option: 
cucumberOpts: { 
    format: './node_modules/cucumber-pretty' 
} 
