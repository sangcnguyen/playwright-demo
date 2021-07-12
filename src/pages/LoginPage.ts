import {Page} from 'playwright';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private usernameInput = `input[name='username']`;
  private passwordInput = `input[name='password']`;
  private loginButton = `button[type='submit']`;

  async goTo() {
    await this.page.goto('https://app.gridly.com/signin');
  }

  async signIn(userName: string, password: string) {
    await this.page.type(this.usernameInput, userName);
    await this.page.type(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
