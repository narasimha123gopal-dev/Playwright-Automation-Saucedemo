import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Remove product from cart', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addProductToCart();
  await inventory.goToCart();

  await cart.removeProduct();
  await cart.validateCartEmpty();
});