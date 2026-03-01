import { test, expect } from '@playwright/test';
import { captureStep } from '../Utils/stepScreenshot';
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

    test(`Full checkout flow for ${username}`, async ({ page }, testInfo) => {

      const login = new LoginPage(page);
      const inventory = new InventoryPage(page);
      const cart = new CartPage(page);
      const checkout = new CheckoutPage(page);

      // Navigate
      await login.navigate();
      await captureStep(page, testInfo, 'navigate');

      // Login
      await login.login(username, 'secret_sauce');
      await captureStep(page, testInfo, 'login');

      // Validate login
      await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
      await captureStep(page, testInfo, 'validateLogin');

      // Add product
      await inventory.addProductToCart();
      await captureStep(page, testInfo, 'addProduct');

      // Go to cart
      await inventory.goToCart();
      await captureStep(page, testInfo, 'goToCart');

      // Checkout
      await cart.proceedToCheckout();
      await captureStep(page, testInfo, 'checkout');

      // Enter details
      await checkout.enterDetails('Narasimha', 'QA', '500001');
      await captureStep(page, testInfo, 'enterDetails');

      // Finish order
      await checkout.finishOrder();
      await captureStep(page, testInfo, 'finishOrder');

      // Validate success
      await checkout.validateOrderSuccess();
      await captureStep(page, testInfo, 'orderSuccess');

    });

  }

});