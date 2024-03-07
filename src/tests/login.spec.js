const commonHooks = require("../utils/hooks");


describe("Practice Login Tests", () => {
	// Variables that will be used multiple times.
	let loginPage;
	let username = "student";
	let wrongUsername = "wrongStudent";
	let password = "Password123";
	let wrongPassword = "Password321";
	
	beforeEach(function(done){
		browser.window.maximize();
		loginPage = browser.page.login();
    });

	it("Perform a Successful Login", (browser) => {
		loginPage
			.navigate()
			.login(username, password);

		browser.assert.urlContains("logged-in-successfully");
	});

	it("Failed Login based on Username", (browser) => {
		loginPage
			.navigate()
			.login(wrongUsername, password);

		browser.assert.textContains("#error", "Your username is invalid!");
	});

	it("Failed Login based on Password", (browser) => {
		loginPage
			.navigate()
			.login(username, wrongPassword);

		browser.assert.textContains("#error", "Your password is invalid!");
	});

});
