class ResourcesPage {

get subscribeCaption () { return $(".Primer_Brand__Heading-module__Heading___IVpmp") }
get emailButton () { return $('//input[@type="email"]') }
get selectCountry () { return $('#country') }
get checkBox () { return $('//input[@type="checkbox"]') }
get subscribeButton () { return $('//button[@type="submit"]') }
get thanksText () { return $('//h1[@id="hero-section-brand-heading"]') }

async clickOnSignUpButton () {
    await this.signUpButton.click ()
}

async setEmailInput ( value ) {
    await this.emailButton.addValue(value)
}

async toSelectCountry (text) {
    await this.selectCountry.click ()
    await this.selectCountry.selectByVisibleText(text)
}

async clickOnCheckBox () {
    await this.checkBox.click ()
}

async clickOnSubscribeButton () {
    await this.subscribeButton.click ()
}

}

export default new ResourcesPage()