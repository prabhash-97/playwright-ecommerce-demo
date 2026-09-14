import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  readonly firstName = this.page.getByPlaceholder('First Name');
  readonly lastName = this.page.getByPlaceholder('Last Name');
  readonly postalCode = this.page.getByPlaceholder('Zip/Postal Code');
  readonly continueButton = this.page.getByRole('button', { name: 'Continue' });
  readonly finishButton = this.page.getByRole('button', { name: 'Finish' });
  readonly cancelButton = this.page.getByRole('button', { name: 'Cancel' });
  readonly errorMessage = this.page.locator('[data-test="error"]');
  readonly confirmationMessage = this.page.getByText('Thank you for your order!');

  async fillCustomer(firstName: string, lastName: string, postalCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async expectError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }

  async expectConfirmation() {
    await expect(this.confirmationMessage).toBeVisible();
  }
}
