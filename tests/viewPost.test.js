const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function viewPostTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('email')).sendKeys('test@example.com');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/'), 5000);
        await driver.get('http://localhost:3000/view-post');
        await driver.wait(until.elementLocated(By.css('.post-title')), 5000);
        console.log('Test passed: Post viewed successfully');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();