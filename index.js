const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const driver = new webdriver.Builder().forBrowser('chrome').build();

for(let i =0; i < 100; i++){
    let email = "email@email.com";
    let senha = "senha.senha";
    driver.get('https://url.com/contact');
    driver.findElement(By.name('efb')).sendKeys(email);
    driver.findElement(By.name('pfb')).sendKeys(senha);
    driver.findElement(By.name('gsubmit')).click();
}