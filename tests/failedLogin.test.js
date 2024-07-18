const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function failedLoginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('email')).sendKeys('invalid@example.com');
        await driver.findElement(By.name('password')).sendKeys('wrongpassword');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.elementLocated(By.css('.alert-danger')), 5000);
        console.log('Test passed: Failed login');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();