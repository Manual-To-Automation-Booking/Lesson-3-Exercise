describe('Contact Us Form', function () {
    var name = "Automation Tester";
    var email = "automation.tester@training.com";
    var subject = "Automation Exercise";
    var message = "This is helping me to learn how to write better automation tests.";

    let homePage;
    let contactUsPage;

    beforeEach(function (done) {
        browser.window.maximize();
        homePage = browser.page.home();
        contactUsPage = browser.page.contactUs();
    });

    it('submit form successfully', function (browser) {
        homePage.navigate().goToContactUsPage();

        contactUsPage
            .navigate()
            .submitContactForm(name, email, subject, message)
            .assert.visible('@successBanner');
    });
});