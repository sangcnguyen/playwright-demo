import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/tests',
  use: {
    // Browser options
    headless: false,
    channel: 'chrome',
    launchOptions: {
      slowMo: 100
    },
    locale: 'en-GB',
    // Context options
    viewport: {width: 1280, height: 720},
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['junit', {outputFile: `junit/results.xml`}],
    ['html', {outputFolder: `html/`, open: 'never'}]
  ]
};
export default config;
