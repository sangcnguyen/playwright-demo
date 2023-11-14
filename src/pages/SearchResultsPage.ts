import {Page} from 'playwright';
import BasePage from './BasePage';

export class SearchResultPage extends BasePage {
  readonly page: Page;
  constructor(rootPage: Page) {
    super(rootPage);
    this.page = rootPage;
  }

  async goTo(query: String) {
    await this.page.goto(`${process.env.BASE_URL}/search?q=${query}`);
  }

  async getQueryResults(query: string) {
    return this.page.locator(`//*[@data-async-context='query:${query}']//h3`);
  }

  async clickOnSearchByImage() {
    await this.page.getByLabel('Search by image').click();
  }
}
