import { $, ElementFinder } from 'protractor';
import { User } from '../utils/user';
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

  public async addDoctor(doctor: User): Promise<void> {
    await this.nameInput.sendKeys(doctor.getName());
    await this.lastNameInput.sendKeys(doctor.getLastName());
    await this.telephoneInput.sendKeys(doctor.getTelephone());
    await this.identificationTypeInput.sendKeys('Cédula de ciudadanía');
    await this.identificationInput.sendKeys(doctor.getIdentification());
    await this.saveButton.click();
  }
}
