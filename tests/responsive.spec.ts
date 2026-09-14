import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../utils/testData';

test('@regression mobile viewport displays the product page and cart control', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(products.cartLink).toBeVisible();
});
