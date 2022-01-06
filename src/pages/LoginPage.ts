import {Page} from 'playwright';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async goTo() {
    await this.page.goto(`${process.env.BASE_URL}/login`);
  }

  async signIn(userName: string, password: string) {
    await this.page.type(`#username`, userName);
    await this.page.type(`#password`, password);
    await this.page.click(`[type='submit'][class='radius']`);
  }
}
