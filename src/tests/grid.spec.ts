import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
require('dotenv').config();

test.describe('feature CRUD grid', () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.signIn(process.env.USER, process.env.PASS);
  });

  test('verify create grid', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.createGridInsideDb('Automation DB', 'Empty grid');
    await page.waitForSelector(`//p[text()='Empty grid']`);
    const visibleGrid = await page.$$(`//p[text()='Empty grid']`);
    expect(visibleGrid.length).toBe(1);
    await homePage.deleteGrid('Empty grid');
  });

  test('verify delete grid', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.createGridInsideDb('Automation DB', 'Empty grid');
    await homePage.deleteGrid('Empty grid');
    //await page.waitForSelector(`//p[text()='Empty grid']`);
    const visibleGrid = await page.$$(`//p[text()='Empty grid']`);
    expect(visibleGrid.length).toBe(0);
  });
});
