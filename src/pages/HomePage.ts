import {Page} from 'playwright';
import {expect} from 'playwright/test';
import {SearchInput} from 'src/components/SearchInput';
import BasePage from './BasePage';

export class HomePage extends BasePage {
  readonly page: Page;
  readonly searchInput: SearchInput;

  constructor(rootPage: Page) {
    super(rootPage);
    this.page = rootPage;
    this.searchInput = new SearchInput(this.page);
  }

  async goTo() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async queryContent(query: string) {
    await this.searchInput.searchInputLocator().click();
    await this.searchInput.searchInputLocator().fill(query);
  }

  async verifyBoxToHaveText(content: string) {
    const allValues = await this.searchInput.allItemsLocator().allTextContents();
    expect.soft(allValues[0]).toContain(content.toLowerCase());
  }
}
