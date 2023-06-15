import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ListDoctorComponent } from './components/list-doctor/list-doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { ListReservationComponent } from './components/list-reservation/list-reservation.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './components/update-reservation/update-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    ListPatientComponent,
    NavbarComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    ListDoctorComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    ListReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({
    //   positionClass:"toast-bottom-right"
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
