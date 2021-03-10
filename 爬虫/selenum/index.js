const {Builder, By, Key, until} = require('selenium-webdriver');

const result = [];

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://wh.58.com/');
    await driver.findElement(By.id('keyword')).sendKeys('前端', Key.RETURN);
    await getData(driver)
  } finally {
  }
})();

async function getData(driver) {
    try {
        const items = await driver.findElements(By.css('#infolist .new-list'))
    
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            try {
                const img = await item.findElement(By.css('.img img')).getAttribute('src')
                const desc = await item.findElement(By.css('.item-desc')).getText()
                const title = await item.findElement(By.css('.new-long-tit.new-long-tit2 b')).getText()
                const seller = await item.findElement(By.css('.seller')).getText()
                const tag = await item.findElement(By.css('.item-tags')).getText()
    
                if (!desc || !title) {
                    continue
                }
    
                result.push({
                    img,
                    desc,
                    title,
                    seller,
                    tag
                })
            } catch {}
        }
        console.log(result, 'result')

        await driver.findElement(By.css('.next')).click()
        await getData(driver)

    } catch {
        console.log(result, 'result')
    }
    
}