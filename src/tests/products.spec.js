describe('Contact Us Form', function () {
    let homePage;
    let productsPage;

    beforeEach(function (done) {
        browser.window.maximize();
        homePage = browser.page.home();
        productsPage = browser.page.products();
        browser.url("https://automationexercise.com");

        try {
            browser.execute("const elements = document.getElementsByClassName('adsbygoogle adsbygoogle-noablate'); while (elements.length > 0) elements[0].remove()");
        } catch (e) {
            console.log("Ad still displayed");
        }
    });

    it('should add products to the cart', async function (browser) {
        homePage.navigate().goToProductsPage();

        productsPage
            .navigate().execute('window.scrollTo(0,400);')
            .navigate().viewProduct(1)
            .navigate().addToCart()
            .navigate().viewCart()
        
        browser.assert.elementsCount('.product_image', 1);

        homePage.navigate().goToProductsPage();

        productsPage
            .navigate().execute('window.scrollTo(0,400);')
            .navigate().viewProduct(2)
            .navigate().addToCart()
            .navigate().viewCart()
          
        browser.assert.elementsCount('.product_image', 2);
    });
});