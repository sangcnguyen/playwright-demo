import {chromium, Browser, Page, BrowserContext} from 'playwright';
import {assert} from 'chai';
import {LoginPage} from '../pages/LoginPage';

let page: Page, browser: Browser, context: BrowserContext, loginPage: LoginPage;

describe('Test the functionality of login', async () => {
  beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext({
      recordVideo: {
        dir: './recordings'
      }
    });
    page = await context.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Checks the message after login successfully', async () => {
    await loginPage.signIn('tomsmith', 'SuperSecretPassword!');
    let actualFlashText = await page.innerText('#flash');
    assert.equal(actualFlashText.replace('×', ' ').trim(), `You logged into a secure area!`);
  });
});
