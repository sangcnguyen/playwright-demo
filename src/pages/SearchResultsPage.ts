import {expect, type Page} from '@playwright/test';
import {SearchInput} from 'src/components/SearchInput';
import BasePage from './BasePage';

export class SearchResultPage extends BasePage {
  readonly page: Page;
  readonly searchInput: SearchInput;

  constructor(rootPage: Page) {
    super(rootPage);
    this.page = rootPage;
    this.searchInput = new SearchInput(this.page);
  }

  async goTo(query: String) {
    await this.page.goto(`${process.env.BASE_URL}/search?q=${query}`);
  }

  getQueryResults = (query: string) => this.page.locator(`//*[@data-async-context='query:${query}']//h3`);

  async verifyImageSourceButtonVisible() {
    await this.page.getByText('Find image source').isVisible();
  }

  async verifyResultToContainText(query: string) {
    const allValues = await this.getQueryResults(query).allTextContents();
    expect.soft(allValues[0]).toContain(query);
  }
}
