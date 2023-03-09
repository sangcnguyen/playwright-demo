import {test, expect} from '../hook/customFixture';
require('dotenv').config();

test('verify login', async ({page, loginPage}) => {
  const actualPageUrl = page.url();
  expect(actualPageUrl).toContain('/secure');
});
