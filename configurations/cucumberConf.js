exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        '../features/feature1.feature'
    ],

    cucumberOpts: {
        require: '../step_definitions/*.steps.js',
        format: './node_modules/cucumber-pretty'
    }
};