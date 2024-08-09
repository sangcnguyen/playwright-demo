import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/tests',
  use: {
    // Browser options
    launchOptions: {
      slowMo: 100
    },
    locale: 'en-GB',
    // Context options
    viewport: {width: 1680, height: 1050},
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: {
      mode: 'on',
      size: {width: 1680, height: 1050}
    }
  },
  reporter: [
    [
      'allure-playwright',
      {
        details: false
      }
    ]
  ]
};
export default config;
