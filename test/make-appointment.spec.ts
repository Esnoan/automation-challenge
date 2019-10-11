import { browser } from 'protractor';
import {
  MenuContentPage,
  AddDoctorPage,
  ConfirmationPage,
  AddPatientPage,
  MakeAppointmentPage
} from '../src/page';
import { generateUUID } from '../src/utils/UUID';

describe('Make an appointment', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addDoctorPage: AddDoctorPage = new AddDoctorPage();
  const confirmationPage: ConfirmationPage = new ConfirmationPage();
  const addPatientPage: AddPatientPage = new AddPatientPage();
  const makeAppointmentPage: MakeAppointmentPage = new MakeAppointmentPage();

  const doctorId = generateUUID();
  const patientId = generateUUID();

  it('then should be add a doctor', async () => {
    await browser.get('http://automatizacion.herokuapp.com/aurbano/');
    await menuContentPage.goToAddDoctor();
    await addDoctorPage.addDoctor(doctorId);
    const confirmationText = await confirmationPage.getConfirmationText();
    expect(confirmationText).toBe('Datos guardados correctamente.');
  });

  it('then should be add a patient', async () => {
    await browser.get('http://automatizacion.herokuapp.com/aurbano/');
    await menuContentPage.goToAddPatient();
    await addPatientPage.addPatient(patientId);
    const confirmationText = await confirmationPage.getConfirmationText();
    expect(confirmationText).toBe('Datos guardados correctamente.');
  });

  it('then should be make an appointment', async () => {
    await browser.get('http://automatizacion.herokuapp.com/aurbano/');
    await menuContentPage.goToMakeAppointment();
    await makeAppointmentPage.makeAppointment(doctorId, patientId);
    const confirmationText = await confirmationPage.getConfirmationText();
    expect(confirmationText).toBe('Datos guardados correctamente.');
  });
});
