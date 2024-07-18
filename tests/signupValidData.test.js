const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function signupValidDataTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/signup');
        await driver.findElement(By.name('name')).sendKeys('Test User');
        await driver.findElement(By.name('phone')).sendKeys('1234567890');
        await driver.findElement(By.name('address')).sendKeys('123 Main St');
        await driver.findElement(By.name('email')).sendKeys('newuser@example.com');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/view-post'), 5000);
        console.log('Test passed: Signup with valid data');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();