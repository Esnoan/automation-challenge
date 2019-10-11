import { $, ElementFinder } from 'protractor';
export class AddDoctorPage {
  private nameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private telephoneInput: ElementFinder;
  private identificationTypeInput: ElementFinder;
  private identificationInput: ElementFinder;

  private saveButton: ElementFinder;

  constructor() {
    this.nameInput = $('input#name');
    this.lastNameInput = $('input#last_name');
    this.telephoneInput = $('input#telephone');
    this.identificationTypeInput = $('select#identification_type');
    this.identificationInput = $('input#identification');
    this.saveButton = $('div#page-wrapper a');
  }

  public async addDoctor(doctorId: string): Promise<void> {
    await this.nameInput.sendKeys('Jhon');
    await this.lastNameInput.sendKeys('Wick');
    await this.telephoneInput.sendKeys('1234567');
    await this.identificationTypeInput.sendKeys('Cédula de ciudadanía');
    await this.identificationInput.sendKeys(doctorId);
    await this.saveButton.click();
  }
}
