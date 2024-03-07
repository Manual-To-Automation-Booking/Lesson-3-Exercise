module.exports = {
	url: function () {
		return "https://practicetestautomation.com/practice-test-login/";
	},
	elements: {
		usernameField: { selector: "#username" },
		passwordField: { selector: "#password" },
		submitButton: { selector: "#submit" },
		errorMessage: { selector: "#error" }
	},
	commands: [
		{
			login: function (username, password) {
				return this.clearValue("@usernameField")
					.setValue("@usernameField", username)
					.clearValue("@passwordField")
					.setValue("@passwordField", password)
					.click("@submitButton");
			},
		},
	],
};
