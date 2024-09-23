class HomePage {
    constructor(page) {
      this.page = page;
      this.loginIcon = this.page.locator('.customer-widget svg.light'); 
      this.emailInput = this.page.locator('syedhassanmujataba619@gmail.com');
      this.passwordInput = this.page.locator('Hassan1234@');
      this.registerButton = this.page.locator('button:has-text("Register")');
    }
  
    async navigateToHomePage() {
      await this.page.goto('https://www.newyorker.de/men/');
    }
  
    async clickLoginIcon() {
      await this.loginIcon.click();
    }
  
    async enterCredentials(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
    }
  
    async clickRegisterButton() {
      await this.registerButton.click();
    }
  
    async clickUserProfileIcon() {
      await this.userProfileIcon.click();
    }
  }
  
  module.exports = HomePage;
  