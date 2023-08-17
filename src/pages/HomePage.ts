import {Page} from 'playwright';
import BasePage from './BasePage';
import {SearchInput} from 'src/components/SearchInput';

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
    await this.page.getByLabel('Search', {exact: true}).fill(query);
  }
}
