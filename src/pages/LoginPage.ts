import {Page} from 'playwright';

export class LoginPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = 'submit';

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
    await this.page.waitForLoadState('networkidle');
  }

  async signIn(userName: string, password: string) {
    await this.page.waitForSelector(this.usernameInput);
    await this.page.type(this.usernameInput, userName);
    //  logger.info(`Entering userName as ${userName}`);
    await this.page.type(this.passwordInput, password);
    // logger.info(`Entering password as ${password}`);
    // await this.page.keyboard.press('Enter');
    await this.page.click(this.loginButton);
    // logger.info(`SignIn into the Gitlab`);
  }
}
