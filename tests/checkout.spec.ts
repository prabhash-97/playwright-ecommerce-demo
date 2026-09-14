import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { customer, products, users } from '../utils/testData';

test.describe('Checkout', () => {
  test('@smoke customer can complete an order', async ({ page }) => {
    const login = new LoginPage(page);
    const productPage = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await productPage.addProduct(products.backpack);
    await productPage.openCart();
    await cart.expectItem(products.backpack);
    await cart.checkout();

    await checkout.fillCustomer(customer.firstName, customer.lastName, customer.postalCode);
    await checkout.continue();
    await checkout.finish();
    await checkout.expectConfirmation();
  });

  test('@regression checkout requires customer information', async ({ page }) => {
    const login = new LoginPage(page);
    const productPage = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await productPage.addProduct(products.backpack);
    await productPage.openCart();
    await cart.checkout();
    await checkout.continue();

    await checkout.expectError('First Name is required');
  });
});
