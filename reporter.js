import { generate } from 'cucumber-html-reporter';

generate({
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'TEST',
        Browser: 'Chrome 110.0',
        Platform: 'Windows 10',
    },
});
