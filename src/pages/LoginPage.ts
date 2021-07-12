import {Page} from 'playwright';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async goTo() {
    await this.page.goto(`${process.env.BASE_URL}/signin`);
  }

  async signIn(userName: string, password: string) {
    await this.page.type(`input[name='username']`, userName);
    await this.page.type(`input[name='password']`, password);
    await this.page.click(`button[type='submit']`);
  }
}
