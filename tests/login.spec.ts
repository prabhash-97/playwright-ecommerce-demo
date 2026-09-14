import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../utils/testData';

test.describe('Authentication', () => {
  test('@smoke valid user can log in', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/inventory.html/);
    await products.expectLoaded();
  });

  test('@regression locked-out user receives an error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.lockedOut.username, users.lockedOut.password);

    await login.expectLoginError('locked out');
  });

  test('@regression invalid credentials are rejected', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('invalid_user', 'invalid_password');

    await login.expectLoginError('Username and password do not match');
  });
});
