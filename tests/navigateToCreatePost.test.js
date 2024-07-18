const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function navigateToCreatePostTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('email')).sendKeys('test@example.com');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/'), 5000);
        await driver.findElement(By.linkText('Create Post')).click();
        await driver.wait(until.urlIs('http://localhost:3000/create-post'), 5000);
        console.log('Test passed: Navigated to create post page');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();
