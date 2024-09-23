const expect = require('@playwright/test');

exports.CategoriesPage = class CategoriesPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.sideMenuBtn = page.locator('//*[@id="fashion"]/div[1]/div[1]/hamburger-menu//div'); 
        this.selectproduct = page.locator('.item-group-1');
        this.categories = ['T-Shirts','Sweatshirts & Pullover','Hemden'];  // Categories selector
    }

    
    async visit() {
        await this.page.goto(BASE_URL);  // Pass the base URL dynamically
         await this.page.waitForLoadState('networkidle');  // Wait for the page to fully load
    }

    async clickSideMenu() {
        //console.log('Waiting for side menu button to be visible...');
        await this.page.waitForSelector('//*[@id="fashion"]/div[1]/div[1]/hamburger-menu//div', { timeout: 10000 });
        console.log('Side menu button is now visible, clicking...');
        await this.sideMenuBtn.click();
    }

    async selectProduct() {
        await this.selectproduct.click();
    }

    async selectCategories(categories) {
        for (const category of categories) {
            const categoryElement = this.categories(category);
            await categoryElement.waitFor({ state: 'visible', timeout: 10000 });
            await categoryElement.click();
        }
    }

   
}
