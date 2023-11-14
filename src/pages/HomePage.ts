import {Page} from 'playwright';
import BasePage from './BasePage';

export class HomePage extends BasePage {
  readonly page: Page;
  constructor(rootPage: Page) {
    super(rootPage);
    this.page = rootPage;
  }

  async goTo() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async queryContent(query: string) {
    await this.page.getByLabel('Search', {exact: true}).fill(query);
  }

  async getDropdown() {
    return this.page.locator("//*[@role='listbox']");
  }
}
