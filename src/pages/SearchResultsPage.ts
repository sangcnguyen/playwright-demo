import {Page} from 'playwright';
import BasePage from './BasePage';
import {SearchInput} from 'src/components/SearchInput';

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

  async getQueryResults(query: string) {
    return this.page.locator(`//*[@data-async-context='query:${query}']//h3`);
  }

  async isFindImageSourceButtonVisible() {
    await this.page.getByText('Find image source').isVisible();
  }
}
