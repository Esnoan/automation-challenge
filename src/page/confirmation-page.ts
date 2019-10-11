import { $, ElementFinder } from 'protractor';

export class ConfirmationPage {
  private confirmationText: ElementFinder;

  constructor() {
    this.confirmationText = $('div#page-wrapper p');

  }

  public async getConfirmationText(): Promise<string> {
    return await this.confirmationText.getText();
  }
}
