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
    viewport: {width: 1280, height: 720},
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'on'
  },
  reporter: [
    ['junit', {outputFile: `junit/results.xml`}],
    [
      'allure-playwright',
      {
        details: false
      }
    ]
  ]
};
export default config;
