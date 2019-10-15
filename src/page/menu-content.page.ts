import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private addDoctorMenu: ElementFinder;
  private addPatientMenu: ElementFinder;
  private makeAppointmentMenu: ElementFinder;

  constructor() {
    this.addDoctorMenu = $('div#page-wrapper a:nth-child(1)');
    this.addPatientMenu = $('div#page-wrapper a:nth-child(2)');
    this.makeAppointmentMenu = $('div#page-wrapper a:nth-child(6)');
  }

  public async goToAddDoctor(): Promise<void> {
    await this.addDoctorMenu.click();
  }

  public async goToAddPatient(): Promise<void> {
    await this.addPatientMenu.click();
  }

  public async goToMakeAppointment(): Promise<void> {
    await this.makeAppointmentMenu.click();
  }
}
