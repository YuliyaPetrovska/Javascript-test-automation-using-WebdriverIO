class TrialPlanPage {

get pickYourTrialText () { return $("//h1[text()='Pick your trial plan']") }
get enterpriseCloud () { return $('//div[@class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]/div') }

async clickOnSignUpButton () {
    await this.signUpButton.click ()
}

async clickOnEnterpriseCloud () {
    await this.enterpriseCloud.click ()
}
}

export default new TrialPlanPage()