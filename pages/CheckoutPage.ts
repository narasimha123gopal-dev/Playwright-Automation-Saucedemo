import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
    await this.page.click('[data-test="continue"]');
  }

  async finishOrder() {
    const finishBtn = this.page.locator('[data-test="finish"]');
    await expect(finishBtn).toBeVisible({ timeout: 10000 });
    await finishBtn.click();
  }

  async validateOrderSuccess() {
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.page.locator('.complete-header')).toBeVisible();
  }
}