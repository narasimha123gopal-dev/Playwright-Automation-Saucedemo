import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async removeProduct() {
    await this.page
      .locator('[data-test="remove-sauce-labs-backpack"]')
      .click();
  }

  async validateCartEmpty() {
    await expect(this.page.locator('.cart_item')).toHaveCount(0);
  }
}