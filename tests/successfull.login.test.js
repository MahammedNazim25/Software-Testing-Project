
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function successfulLoginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('email')).sendKeys('test@example.com');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/'), 5000);
        console.log('Test passed: Successful login');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();