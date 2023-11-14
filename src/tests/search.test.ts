import test, {expect} from 'playwright/test';
import {HomePage} from 'src/pages/HomePage';
import {SearchResultPage} from 'src/pages/SearchResultsPage';
require('dotenv').config();

test('Suggested list should be appeared', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await homePage.queryContent('Tesla');
  expect.soft(homePage.searchInput.isListBoxVisible()).toBeTruthy();
  expect.soft(await homePage.searchInput.getAllTextItems()).toContain('Tesla');
});

test('Search results via image should be appeared', async ({page}) => {
  const query = 'Playwright';
  const searchResultsPage = new SearchResultPage(page);
  await searchResultsPage.goTo(query);
  await expect.soft((await searchResultsPage.getQueryResults(query)).first()).toContainText(query);
  await searchResultsPage.searchInput.clickOnSearchByImage('src/fixtures/playwright-logo.png');
  expect(searchResultsPage.isFindImageSourceButtonVisible()).toBeTruthy();
});
