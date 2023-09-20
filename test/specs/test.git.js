
import { expect } from '@wdio/globals'
import MainPage from "./../pages/main.page.js"
import TrialPlanPage from "./../pages/trial.plan.page.js"
import ResourcesPage from "./../pages/resources.page.js"
import PricingPage from "./../pages/pricing.page.js"

describe("GitHub main page", () => {
    
    it("should sign up on GitHub", async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnSignUpButton()
        await browser.pause(2000)

        await expect (MainPage.welcomeToGitText).toBeDisplayedInViewport()
        await browser.pause(4000)

        await MainPage.setEmailInput( "emailemail@com.ua" )
        await browser.pause(2000)
        await MainPage.clickOnEmailContinueButton()
        await browser.pause(2000)

        await MainPage.setPasswordInput ("pas5555555")
        await browser.pause(2000)
        await MainPage.clickOnPasswordContinueButton()
        await browser.pause(2000)

        await MainPage.setLoginInput ("YuliiaPetrovska")
        await browser.pause(2000)
        await MainPage.clickOnLoginContinueButton()
        await browser.pause(2000)

        await MainPage.setProductUpdatesInput ( "y")
        await browser.pause(2000)
        await MainPage.clickOnProductUpdatesContinueButton()
        await browser.pause(3000)
    });

    it("should scroll main page, click 'start a free trial' and pick 'Enterprise cloud'", async () => {
        await browser.url('https://github.com/');

        await MainPage.scrollPageToThePlaceForAnyoneText()
        await browser.pause(2000)
        await expect (MainPage.thePlaceForAnyoneText).toHaveText ("The place for anyone from anywhere to build anything")
        await expect (MainPage.startAfreeTrialButton).toBeDisplayedInViewport()
        await MainPage.clickOnStartAfreeTrialButton()

        await expect (TrialPlanPage.pickYourTrialText).toHaveText ("Pick your trial plan")
        await TrialPlanPage.clickOnEnterpriseCloud()
        await browser.pause(2000)
        
    });

    it("should scroll main page, click 'Subscribe', input email, choose country, click checkbox snd click 'Subscribe'  ", async () => {
        await browser.url('https://github.com/');
        await MainPage.scrollPageToSubscribeButton()
        await browser.pause(2000)
        await expect (MainPage.subscribeButton).toBeClickable()
        await MainPage.clickOnSubscribeButton()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
        await expect (ResourcesPage.subscribeCaption).toHaveText ("Subscribe to our developer newsletter")

        await ResourcesPage.setEmailInput( "emailemail@com.ua" )
        await browser.pause(2000)
        await ResourcesPage.toSelectCountry ("Ukraine")
        await browser.pause(2000)

        await ResourcesPage.clickOnCheckBox()
        await ResourcesPage.clickOnSubscribeButton()
        await browser.pause(3000)
        await expect (ResourcesPage.thanksText).toHaveText ("Thanks for subscribing!")

    });

    it("should enter a word into the search bar and check for its presence in the search results '", async () => {
        await browser.url('https://github.com/');
        await MainPage.clickOnSearchButton ()
        await MainPage.setSearchInput ('act')
        await browser.keys(['Enter'])
        await browser.pause(3000)
        await expect (MainPage.searchResult).toHaveHrefContaining ("act")

    });

    it("should click on'Pricing',scroll page and click on 'CompareAllFeatures'", async () => {
        await browser.url('https://github.com/');
        await MainPage.clickOnPricingButton()
        await browser.pause(2000)
        await expect (PricingPage.getThePlatformCaption).toBeDisplayedInViewport()
        await PricingPage.scrollPageToCompareAllFeaturesLink()
        await PricingPage.clickOnCompareAllFeaturesLink()
        await browser.pause(2000)
        await PricingPage.scrollPageToCompareFeaturesText()
        await browser.pause(2000)
        await expect (PricingPage.compareFeaturesText).toBeDisplayedInViewport()

    });

});