// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'html',
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'http://localhost:8545',
  }
});