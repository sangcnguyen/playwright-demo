import {Page} from 'playwright';

export class ControlsPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;
  private swapCheckboxButton = '#checkbox-example button';
  private secondColumn = '#column-b';

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_controls', {
      timeout: 50000,
      waitUntil: 'networkidle'
    });
  }

  async clickSwapCheckbox() {
    await this.page.waitForSelector(this.swapCheckboxButton);
    await this.page.click(this.swapCheckboxButton);
  }
}
