import {chromium, Browser, Page, BrowserContext} from 'playwright';
import {assert} from 'chai';
import {ControlsPage} from '../pages/ControlsPage';

let page: Page, browser: Browser, context: BrowserContext, controlPage: ControlsPage;

describe('Test the functionality of control', async () => {
  beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext({
      recordVideo: {
        dir: './recordings'
      }
    });
    page = await context.newPage();
    controlPage = new ControlsPage(page);
    await controlPage.navigate();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Checks the the invisible checkbox after remove', async () => {
    await controlPage.clickSwapCheckbox();
    assert.isTrue(await page.isVisible('#checkbox'));
  });
});
