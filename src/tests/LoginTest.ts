import {chromium, Browser, Page} from 'playwright';
import {assert} from 'chai';
import {LoginPage} from '../pages/LoginPage';

//const BASE_URL = 'https://the-internet.herokuapp.com/';

describe('Test the functionality of login', async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();
  let loginPage = new LoginPage(page);

  beforeEach(async () => {
    loginPage.navigate();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Checks the title of the page', async () => {
    loginPage.signIn('tomsmith', 'SuperSecretPassword!');
  });
});
