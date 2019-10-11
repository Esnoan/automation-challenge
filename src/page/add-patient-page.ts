import { $, ElementFinder } from 'protractor';
export class AddPatientPage {
  private nameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private telephoneInput: ElementFinder;
  private identificationTypeInput: ElementFinder;
  private identificationInput: ElementFinder;
  private prepaidCheck: ElementFinder;

  private saveButton: ElementFinder;

  constructor() {
    this.nameInput = $('input[name="name"]');
    this.lastNameInput = $('input[name="last_name"]');
    this.telephoneInput = $('input[name="telephone"]');
    this.identificationTypeInput = $('div#page-wrapper select');
    this.identificationInput = $('input[name="identification"]');
    this.prepaidCheck = $('input[name="prepaid"]');
    this.saveButton = $('div#page-wrapper a');
  }

  public async addPatient(patientId: string): Promise<void> {
    await this.nameInput.sendKeys('Jhon');
    await this.lastNameInput.sendKeys('Wick');
    await this.telephoneInput.sendKeys('1234567');
    await this.identificationTypeInput.sendKeys('Cédula de ciudadanía');
    await this.identificationInput.sendKeys(patientId);
    await this.prepaidCheck.click();
    await this.saveButton.click();
  }
}
