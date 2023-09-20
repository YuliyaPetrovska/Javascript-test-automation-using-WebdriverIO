import { expect } from '@wdio/globals'

describe("WebdriverIo main page", () => {
    xit("API page should have correct url", async () => {
        await browser.url('https://webdriver.io/');
        let apiButton = await $('//a[text()="API"]')
        await browser.pause(2000)
        await apiButton.click()
        await browser.pause(4000)

        // receive url
        console.log(await browser.getUrl()) // outputs: "https://webdriver.io/docs/api"
      
        await expect(browser).toHaveUrl(
            'https://webdriver.io/docs/api')
            
    });

    xit("should show text of header Introduction", async () => {
        await browser.url('https://webdriver.io/docs/api');
        let introduction = await $("//h1")

        console.log("Introduction text is: " + await introduction.getText())
        await expect(introduction).toHaveText('Introduction')
       
    });

    xit("should show text of the breadcrumbs element", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let breadcrumbs = await $("span.breadcrumbs__link")
        console.log("breadcrumbs text is: " + await breadcrumbs.getText())

        await expect(breadcrumbs).toBeDisplayed()
        
    });

    xit("should show link of WebDriver element ", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let webDrElem = await $("//a[text()='WebDriver']")
        let attr = await webDrElem.getAttribute('href')
        console.log("WebDriver element attribute is: " + attr) 
      
        await expect(webDrElem).toHaveLink('/docs/api/webdriver')
    });

    xit("should add text and delete it in search area", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let search = await $('.DocSearch-Button')
        await search.click()
        let inputSearch = await $('.DocSearch-Input')
        await inputSearch.setValue("All is done")
        await browser.pause(4000)

        let reset = await $('.DocSearch-Reset')
        await reset.click()
        await browser.pause(4000)
    
    });
   
});



