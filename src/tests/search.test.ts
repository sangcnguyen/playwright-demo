import test, {expect} from 'playwright/test';
import {HomePage} from 'src/pages/HomePage';
import {SearchResultPage} from 'src/pages/SearchResultsPage';
require('dotenv').config();

test('Suggested dropdown list should be appeared ', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await homePage.queryContent('Tesla');
  await expect.soft((await homePage.getDropdown()).first()).toBeVisible();
  await expect.soft((await homePage.getDropdown()).first()).toContainText('Tesla');
});

test('Search results should be appeared', async ({page}) => {
  const query = 'Playwright';
  const searchResultsPage = new SearchResultPage(page);
  await searchResultsPage.goTo(query);
  await expect.soft((await searchResultsPage.getQueryResults(query)).first()).toContainText(query);
  await searchResultsPage.clickOnSearchByImage();
});
