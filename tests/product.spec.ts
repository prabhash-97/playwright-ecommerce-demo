import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users, products } from '../utils/testData';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(users.standard.username, users.standard.password);
});

test.describe('Product and cart functionality', () => {
  test('@smoke product list is displayed', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.expectLoaded();
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('@regression user can add a product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProduct(products.backpack);
    await expect(productsPage.cartLink).toHaveText('1');
  });

  test('@regression user can remove a product from cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProduct(products.backpack);
    await productsPage.removeProduct(products.backpack);
    await expect(productsPage.cartLink).toHaveCount(1);
    await expect(productsPage.cartLink).not.toHaveText('1');
  });

  test('@regression multiple products can be added', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProduct(products.backpack);
    await productsPage.addProduct(products.bikeLight);
    await expect(productsPage.cartLink).toHaveText('2');
  });

  test('@regression product sorting works by price low to high', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortDropdown.selectOption('lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map((price) => Number(price.replace('$', '')));
    expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
  });

  test('@regression cart contains selected product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProduct(products.boltTShirt);
    await productsPage.openCart();

    const cart = page.locator('.cart_item').filter({ hasText: products.boltTShirt });
    await expect(cart).toBeVisible();
  });
});
