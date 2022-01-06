import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
require('dotenv').config();

test('verify login', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.signIn(process.env.USER, process.env.PASS);
  const actualPageUrl = page.url();
  expect(actualPageUrl).toContain('/secure');
});
