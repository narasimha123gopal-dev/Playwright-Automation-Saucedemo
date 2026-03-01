import { Page } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  async addProductToCart() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}