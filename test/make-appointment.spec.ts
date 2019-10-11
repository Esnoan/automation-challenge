import { browser } from 'protractor';
import {
  MenuContentPage,
  AddDoctorPage,
  ConfirmationPage,
  AddPatientPage,
  MakeAppointmentPage
} from '../src/page';
import { generateUser } from '../src/utils/user';

const URL = 'http://automatizacion.herokuapp.com/aurbano/';

describe('Given I want to schedule a medical appointment', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addDoctorPage: AddDoctorPage = new AddDoctorPage();
  const confirmationPage: ConfirmationPage = new ConfirmationPage();
  const addPatientPage: AddPatientPage = new AddPatientPage();
  const makeAppointmentPage: MakeAppointmentPage = new MakeAppointmentPage();

  let doctor: any = {};
  let patient: any = {};

  it('and doctor exists in system', async () => {
    doctor = await generateUser();
    await browser.get(URL);
    await menuContentPage.goToAddDoctor();
    await addDoctorPage.addDoctor(doctor.identification);
    const confirmationText = await confirmationPage.getConfirmationText();
    expect(confirmationText).toBe('Datos guardados correctamente.');
  });

  it('and I create my patient user', async () => {
    patient = await generateUser();
    await browser.get(URL);
    await menuContentPage.goToAddPatient();
    await addPatientPage.addPatient(patient.identification);
    const confirmationText = await confirmationPage.getConfirmationText();
    expect(confirmationText).toBe('Datos guardados correctamente.');
  });

  it('when I schedule the appointment on', async () => {
    await browser.get(URL);
    await menuContentPage.goToMakeAppointment();
    await makeAppointmentPage.makeAppointment(doctor.identification, patient.identification);
  });

  it('then I should get a confirmation message', async () => {
    await makeAppointmentPage.confirmDate();
    const confirmationText = await confirmationPage.getConfirmationText();
    expect(confirmationText).toBe('Datos guardados correctamente.');
  });
});
