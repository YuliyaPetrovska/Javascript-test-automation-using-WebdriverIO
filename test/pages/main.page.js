class MainPage {

get signUpButton () { return $('//a[@class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]') }
get welcomeToGitText () { return $('//span[@data-target="typing-effect.content"]') }
get emailButton () { return $("#email") }
get emailContinueButton () { return $('button[data-optimizely-event="click.signup_continue.email"]') }
get passwordButton () { return $("#password") }
get passwordContinueButton () { return $('//button[@data-optimizely-event="click.signup_continue.password"]') }
get loginButton () { return $("#login") }
get loginContinueButton () { return $('//button[@data-optimizely-event="click.signup_continue.username"]') }
get productUpdatesButton () { return $("#opt_in") }
get productUpdatesContinueButton () { return $('//button[@data-continue-to="captcha-and-submit-container"]') }
get loginButton () { return $("#login") }
get thePlaceForAnyoneText () { return $(".color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3") }
get startAfreeTrialButton () { return $(".btn-mktg.btn-large-mktg.btn-muted-mktg") }
get subscribeButton () { return $(".btn-mktg.mb-4.btn-muted-mktg") }
get searchButton () { return $('.octicon.octicon-search') }
get searchField () { return $('//input[@type="text"]') }
get searchResult () { return $('.Link__StyledLink-sc-14289xe-0.fIqerb') }
get pricingButton () { return $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block') }

async clickOnSignUpButton () {
    await this.signUpButton.click ()
}

async setEmailInput ( value ) {
    await this.emailButton.addValue (value)
}

async clickOnEmailContinueButton () {
    await this.emailContinueButton.click ()
}

async setPasswordInput ( value ) {
    await this.passwordButton.addValue (value)
}

async clickOnPasswordContinueButton () {
    await this.passwordContinueButton.click ()
}

async setLoginInput ( value ) {
    await this.loginButton.addValue (value)
}

async clickOnLoginContinueButton () {
    await this.loginContinueButton.click ()
}

async setProductUpdatesInput ( value ) {
    await this.productUpdatesButton.addValue (value)
}

async clickOnProductUpdatesContinueButton () {
    await this.productUpdatesContinueButton.click ()
}

async scrollPageToThePlaceForAnyoneText () {
    await this.thePlaceForAnyoneText.scrollIntoView()
}

async clickOnStartAfreeTrialButton () {
    await this.startAfreeTrialButton.click ()
}

async scrollPageToSubscribeButton () {
    await this.subscribeButton.scrollIntoView()
}

async clickOnSubscribeButton () {
    await this.subscribeButton.click ()
}

async clickOnSearchButton () {
    await this.searchButton.click ()
}

async setSearchInput ( value ) {
    await this.searchField.addValue (value)
}

async clickOnPricingButton () {
    await this.pricingButton.click ()
}
}

export default new MainPage()