
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// require('chromedriver');

// (async function uploadCvTest() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {
        
//         await driver.get('http://localhost:3000/upload-cv');

       
//         let fileInput = await driver.findElement(By.css('input[type="file"]'));
//         await fileInput.sendKeys('/path/to/your/cv/file.pdf');

        
//         let submitButton = await driver.findElement(By.css('button[type="submit"]'));
//         await submitButton.click();

        
//         await driver.wait(until.urlIs('http://localhost:3000/success'), 10000);

//         console.log('Test passed: File uploaded successfully');
//     } catch (error) {
//         console.error('Test failed:', error);
//     } finally {
//         await driver.quit();
//     }
// })();
// tests/uploadCv.test.js
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

(async function uploadCvTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log('Navigating to the app...');
        await driver.get('http://localhost:3000/upload-cv');

        console.log('Finding the submit button...');
        let submitButton = await driver.findElement(By.css('button[type="submit"]'));
        console.log('Clicking the submit button without selecting a file...');
        await submitButton.click();

        console.log('Waiting for alert...');
        await driver.wait(until.alertIsPresent(), 5000);
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();

        if (alertText === 'Please select a file') {
            console.log('Test passed: Alert box shown correctly');
        } else {
            console.log('Test failed: Unexpected alert message');
        }

        await alert.accept();
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        console.log('Quitting the driver...');
        await driver.quit();
    }
})();