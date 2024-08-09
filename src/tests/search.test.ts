import {test} from 'src/core/BaseTest';

require('dotenv').config();

test('Suggested list should be appeared', async ({homePage}) => {
  const stringContent = 'Tesla';
  await homePage.queryContent(stringContent);
  await homePage.verifyBoxToHaveText(stringContent);
});

test('Search results via image should be appeared', async ({searchResultPage}) => {
  const stringContent = 'Playwright';

  await searchResultPage.goTo(stringContent);
  await searchResultPage.verifyResultToContainText(stringContent);
  await searchResultPage.searchInput.clickOnSearchByImage('src/fixtures/playwright-logo.png');
  await searchResultPage.verifyImageSourceButtonVisible();
});
