import { expect } from '@wdio/globals'

describe("WebdriverIo main page", () => {

xit("should click api button and skroll page to Blog button", async () => {
    await browser.url('https://webdriver.io/');

    const apiButton = await $('//div[@class="navbar__items"]//a[@href="/docs/api"]')
    await apiButton.click()
    await browser.pause(2000)
    const blogButton = await $('//a[@class="footer__link-item"][text()="Blog"]')
    await blogButton.scrollIntoView()
    await browser.pause(2000)
});
 xit("should show if 'next' button is visible, is clickable, get HTML, wait until 'webdriver-protocol' is displayed", async () => {   
    await browser.url('https://webdriver.io/docs/api');

    const nextButton = await $('//nav[@class="pagination-nav docusaurus-mt-lg"]//a')
    await nextButton.scrollIntoView()
    let isDisplayedInViewport = await nextButton.isDisplayedInViewport()
    console.log("Is next button visible: " + isDisplayedInViewport)  

    let isClickable = await nextButton.isClickable()
    console.log("Is next button clickable: " + isClickable)  

    const outerHtml = nextButton.getHTML()
    console.log("Outer HTML: " + outerHtml)

    const innerHtml = nextButton.getHTML(false)
    console.log("Inner HTML: " + innerHtml)

    nextButton.click()
    await browser.pause(2000)

    await browser.waitUntil(async () => {
        return $('//h2[@id="webdriver-protocol"]').isDisplayed();
        }, 5000, "Button is not displayed")

});
});
