import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
require('dotenv').config();

type page = {
  loginPage: LoginPage;
};

export const test = base.extend<page>({
  loginPage: async ({page}, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.signIn(process.env.USERNAME, process.env.PASSWORD);
    await use(loginPage);
  }
});

export {expect} from '@playwright/test';
