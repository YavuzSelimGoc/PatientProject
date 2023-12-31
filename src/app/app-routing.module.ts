import { UpdateReservationComponent } from './components/update-reservation/update-reservation.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { ListReservationComponent } from './components/list-reservation/list-reservation.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ListDoctorComponent } from './components/list-doctor/list-doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';

const routes: Routes = [

  {
    path: "", component: LoginComponent, children: [
      { path: "", pathMatch: "full", component: LoginComponent },
      { path: "login", component: LoginComponent },
    ]
  },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "header", component: HeaderComponent },
      { path: "listPatient", component: ListPatientComponent },
      { path: "listDoctor", component: ListDoctorComponent },
      { path: "addPatient", component: AddPatientComponent },
      { path: "addReservation", component: AddReservationComponent },
      { path: "addDoctor", component: AddDoctorComponent },
      { path: "listReservation", component: ListReservationComponent },
      {path:"updatePatient/patient/:patientID",component:UpdatePatientComponent},
      {path:"updateDoctor/doctor/:doctorID",component:UpdateDoctorComponent},
      {path:"updateReservation/reservation/:reservationID",component:UpdateReservationComponent},
    ]
  }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
