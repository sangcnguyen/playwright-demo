import {Page} from 'playwright';

export class SearchInput {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getAllTextItems() {
    return await this.page.locator('//div[@aria-description]/div[1]/span').allTextContents();
  }

  async clickOnSearchByImage(srcImg: string) {
    await this.page.getByLabel('Search by image').click();
    await this.page.locator(`//input[@name="encoded_image"]`).setInputFiles(srcImg);
  }

  async isListBoxVisible() {
    await this.page.getByRole('listbox').isVisible();
  }
}
