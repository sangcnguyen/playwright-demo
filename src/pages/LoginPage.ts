import {Page} from 'playwright';

export class LoginPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = "i[class='fa fa-2x fa-sign-in']";

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login', {
      timeout: 50000,
      waitUntil: 'networkidle'
    });
  }

  async signIn(userName: string, password: string) {
    await this.page.waitForSelector(this.usernameInput);
    await this.page.type(this.usernameInput, userName);
    await this.page.type(this.passwordInput, password);
    // await this.page.keyboard.press('Enter');
    await this.page.click(this.loginButton);
  }
}
