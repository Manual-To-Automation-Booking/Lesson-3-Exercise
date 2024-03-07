module.exports.beforeEach = (browser, done) => {
	if (!browser.options.desiredCapabilities.real_mobile) {
		browser.windowMaximize();
	}
	done();
};