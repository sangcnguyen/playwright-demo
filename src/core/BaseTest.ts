import {test as baseTest} from '@playwright/test';
import {HomePage} from 'src/pages/HomePage';
import {SearchResultPage} from 'src/pages/SearchResultsPage';
import {createMoveIndicator} from './mouseHelper';

type pages = {
  homePage: HomePage;
  searchResultPage: SearchResultPage;
};

export const test = baseTest.extend<pages>({
  homePage: async ({page}, use) => {
    await createMoveIndicator(page);
    const homePage = new HomePage(page);
    await homePage.goTo();
    await use(new HomePage(page));
  },

  searchResultPage: async ({page}, use) => {
    await createMoveIndicator(page);
    await use(new SearchResultPage(page));
  }
});
export {expect} from '@playwright/test';
