import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  readonly title = this.page.getByText('Your Cart', { exact: true });
  readonly checkoutButton = this.page.getByRole('button', { name: 'Checkout' });

  item(name: string) {
    return this.page.locator('.cart_item').filter({ hasText: name });
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }

  async expectItem(name: string) {
    await expect(this.item(name)).toBeVisible();
  }

  async expectItemNotPresent(name: string) {
    await expect(this.item(name)).toHaveCount(0);
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
