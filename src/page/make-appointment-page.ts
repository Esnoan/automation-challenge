import { $, ElementFinder } from 'protractor';
export class MakeAppointmentPage {
  private dateInput: ElementFinder;
  private doctorIdInput: ElementFinder;
  private patientIdInput: ElementFinder;
  private observationsInput: ElementFinder;

  private saveButton: ElementFinder;

  constructor() {
    this.dateInput = $('input#datepicker');
    this.doctorIdInput = $('div#page-wrapper div:nth-child(3) > input');
    this.patientIdInput = $('div#page-wrapper div:nth-child(2) > input');
    this.observationsInput = $('div#page-wrapper textarea');
    this.saveButton = $('div#page-wrapper a');
  }

  public async makeAppointment(doctorId: string, patientId: string): Promise<void> {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    await this.dateInput.sendKeys(date.toDateString());
    await this.doctorIdInput.sendKeys(doctorId);
    await this.patientIdInput.sendKeys(patientId);
    await this.observationsInput.sendKeys('Sin observaciones');
  }

  public async confirmDate() {
    await this.saveButton.click();
  }
}
