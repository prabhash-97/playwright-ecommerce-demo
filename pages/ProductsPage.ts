import { expect, Page } from '@playwright/test';

export class ProductsPage {
  constructor(private readonly page: Page) {}

  readonly title = this.page.getByText('Products', { exact: true });
  readonly cartLink = this.page.locator('.shopping_cart_link');
  readonly sortDropdown = this.page.locator('.product_sort_container');

  product(name: string) {
    return this.page.locator('.inventory_item').filter({ hasText: name });
  }

  addButton(name: string) {
    return this.product(name).getByRole('button', { name: /Add to cart/i });
  }

  removeButton(name: string) {
    return this.product(name).getByRole('button', { name: /Remove/i });
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }

  async addProduct(name: string) {
    await this.addButton(name).click();
  }

  async removeProduct(name: string) {
    await this.removeButton(name).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
