module.exports = {
	url: function () {
		return "";
	},
	elements: {
		nameField: { selector: 'input[data-qa="name"]' },
		emailAddressField: { selector: 'input[data-qa="email"]' },
		subjectField: { selector: 'input[data-qa="subject"]' },
		messageField: { selector: '#message' },
		submitButton: { selector: 'input[data-qa="submit-button"]' },
		successBanner: { selector: 'div[class="status alert alert-success"]' },
	},
	commands: [
		{
			submitContactForm: function (name, email, subject, message) {
				return this.clearValue("@nameField")
					.setValue("@nameField", name)
					.setValue("@emailAddressField", email)
					.setValue("@subjectField", subject)
					.setValue("@messageField", message)
					.click("@submitButton")
					.alerts.accept();
			},
		},
	],
};
