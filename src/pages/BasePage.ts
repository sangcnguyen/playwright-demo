import {Page} from 'playwright';

export default abstract class BasePage {
  readonly rootPage: Page;

  constructor(rootPage: Page) {
    this.rootPage = rootPage;
  }
}
