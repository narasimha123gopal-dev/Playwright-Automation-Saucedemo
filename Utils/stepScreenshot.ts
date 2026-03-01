import { Page, TestInfo } from '@playwright/test';

export async function captureStep(
  page: Page,
  testInfo: TestInfo,
  stepName: string
) {
  await page.screenshot({
    path: `screenshots/${testInfo.title}-${stepName}.png`,
    fullPage: true
  });
}