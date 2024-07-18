const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function createPostTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('email')).sendKeys('admin@example.com');
        await driver.findElement(By.name('password')).sendKeys('adminpassword');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/'), 5000);
        await driver.get('http://localhost:3000/create-post');
        await driver.findElement(By.name('title')).sendKeys('New Post');
        await driver.findElement(By.name('content')).sendKeys('This is a new post.');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/view-post'), 5000);
        console.log('Test passed: Post created successfully');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();