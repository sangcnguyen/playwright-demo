import {type Page} from '@playwright/test';

export default abstract class BasePage {
  readonly rootPage: Page;

  constructor(rootPage: Page) {
    this.rootPage = rootPage;
  }
}
