import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/tests',
  use: {
    // Browser options
    headless: false,
    launchOptions: {
      slowMo: 50
    },
    // Context options
    viewport: {width: 1280, height: 720},
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  }
};
export default config;
