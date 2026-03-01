import { test } from '@playwright/test';
import { captureStep } from '../Utils/stepScreenshot';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete Order Workflow', async ({ page }, testInfo) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await test.step('Navigate to App', async () => {
    await login.navigate();
    await captureStep(page, testInfo, 'navigate');
  });

  await test.step('Login', async () => {
    await login.login('standard_user', 'secret_sauce');
    await captureStep(page, testInfo, 'login');
  });

  await test.step('Add Product', async () => {
    await inventory.addProductToCart();
    await captureStep(page, testInfo, 'addProduct');
  });

  await test.step('Go To Cart', async () => {
    await inventory.goToCart();
    await captureStep(page, testInfo, 'goToCart');
  });

  await test.step('Checkout', async () => {
    await cart.proceedToCheckout();
    await captureStep(page, testInfo, 'checkout');
  });

  await test.step('Finish Order', async () => {
    await checkout.enterDetails('Narasimha', 'QA', '500001');
    await checkout.finishOrder();
    await captureStep(page, testInfo, 'finishOrder');
  });

});