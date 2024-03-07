module.exports = {
	url: function () {
		return "";
	},
	elements: {
        productOneLocator: { selector: 'a[href="/product_details/1"]' },
        productTwoLocator: { selector: 'a[href="/product_details/2"]' },
        hoverProducts: { selector: 'div[class="single-products"]' },
        productOneAddToCartButton: { selector: 'a[data-product-id="1"]' },
        productTwoAddToCartButton: { selector: 'a[data-product-id="2"]'},
        addToCartButton: { selector: '.cart' },
        viewCart: { selector: 'u' },
        productImages: { selector: '.product_image' }
	},
	commands: [
		{
			viewProduct: function (productNumber) {
				if (productNumber == 1) {
					this.moveToElement("@productOneLocator", 0, 0);
					return this.waitForElementVisible({ 
						selector: "@productOneLocator", 
						timeout: 10000, 
						retryInterval: 200 
					})
					.click("@productOneLocator");
				} else if (productNumber == 2) {
					this.moveToElement("@productTwoLocator", 0, 0);
					return this.waitForElementVisible({ 
						selector: "@productTwoLocator", 
						timeout: 10000, 
						retryInterval: 200 
					})
					.click("@productTwoLocator");
				} else {
					console.log('Invalid number passed to function!');
					return null;
				}
			},

			addToCart: function () {
				return this.waitForElementVisible({ 
					selector: "@addToCartButton", 
					timeout: 10000, 
					retryInterval: 200 
				}).click("@addToCartButton");
			},

			viewCart() {
				this.waitForElementVisible({ 
					selector: "@viewCart", 
					timeout: 10000, 
					retryInterval: 200 
				}).click("@viewCart");
			}
		},
	],
};
