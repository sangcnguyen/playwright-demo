import {Page} from 'playwright';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createGridInsideDb(findDb: string, gridName: string) {
    await this.page.click(
      `//h4[.='${findDb}']//ancestor::div[contains(concat(' ', @class, ' '), ' MuiGrid-justify-xs-space-between ')]//button[@tr-dt='Open Add Grid Option']`
    );
    await this.page.click(`#createEmptyTranslationGrid`);
    await this.page.fill(`input[name=projectName]`, gridName);
    await this.page.click(`//span[text()='Create']`);
  }

  async deleteGrid(gridName: string) {
    await this.page.click(`//p[.='${gridName}']`, {button: 'right'});
    await this.page.click(`#gridDlBtn`);
    await this.page.click(`//span[.='Delete']`);
  }
}
