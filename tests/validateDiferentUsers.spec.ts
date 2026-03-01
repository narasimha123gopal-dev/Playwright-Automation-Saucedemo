import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const users = [
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user'
];

test.describe('Validate Special Users Full Flow', () => {

  for (const username of users) {

    test(`Full checkout flow for ${username}`, async ({ page }) => {

      const login = new LoginPage(page);
      const inventory = new InventoryPage(page);
      const cart = new CartPage(page);
      const checkout = new CheckoutPage(page);

      // Login
      await login.navigate();
      await login.login(username, 'secret_sauce');
      await expect(page).toHaveURL(/inventory/);

      // Add product
      await inventory.addProductToCart();
      await inventory.goToCart();
      await expect(page).toHaveURL(/cart/);

      // Checkout step 1
      await cart.proceedToCheckout();
      await expect(page).toHaveURL(/checkout-step-one/);

      // Enter details
      await checkout.enterDetails('Narasimha', 'QA', '500001');

      // 🔴 Special handling BEFORE asserting step two
      if (username === 'problem_user') {

        // It stays on step one (broken behavior)
        await expect(page).toHaveURL(/checkout-step-one/);
        return;

      }

      // For other users, step two should load
      await expect(page).toHaveURL(/checkout-step-two/);

      // Finish order
      await checkout.finishOrder();

      if (username === 'error_user') {
        await expect(page.locator('.complete-header')).not.toBeVisible();
      } else {
        await checkout.validateOrderSuccess();
      }

    });

  }

});