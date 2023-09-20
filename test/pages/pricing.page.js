class PricingPage {

get getThePlatformCaption () { return $("h1.h2-mktg") }
get compareAllFeaturesLink () { return $('.d-flex.flex-column.flex-items-center.flex-justify-center.h5-mktg') }
get compareFeaturesText () { return $(".h1") }

async clickOnCompareAllFeaturesLink () {
    await this.compareAllFeaturesLink.click ()
}

async scrollPageToCompareAllFeaturesLink () {
    await this.compareAllFeaturesLink.scrollIntoView()
}

async scrollPageToCompareFeaturesText () {
    await this.compareFeaturesText.scrollIntoView()
}
}
export default new PricingPage()