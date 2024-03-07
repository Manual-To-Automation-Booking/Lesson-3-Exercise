module.exports = {
	url: function () {
		return "";
	},
	elements: {
		homeTopNavSelector: { selector: 'a[href="/"]' },
        productsTopNavSelector: { selector: 'a[href="/products"]' },
        cartTopNavSelector: { selector: 'a[href="/view_cart"]' },
        loginTopNavSelector: { selector: 'a[href="/login"]' },
        testCasesTopNavSelector: { selector: 'a[href="/test_cases"]' },
        apiTopNavSelector: { selector: 'a[href="/api_list"]' },
        contactUsTopNavSelector: { selector: 'a[href="/contact_us"]' },
	},
	commands: [
		{
			goToHomePage: function () { return this.click("@homeTopNavSelector"); },
            goToProductsPage: function () { return this.click("@productsTopNavSelector"); },
            goToCartPage: function () { return this.click("@cartTopNavSelector"); },
            goToLoginPage: function () { return this.click("@loginTopNavSelector"); },
            goToTestCasesPage: function () { return this.click("@testCasesTopNavSelector"); },
            goToAPIPage: function () { return this.click("@apiTopNavSelector"); },
            goToContactUsPage: function () { return this.click("@contactUsTopNavSelector"); },
		},
	],
};
