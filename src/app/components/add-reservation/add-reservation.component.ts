import { ReservationService } from './../../services/reservation.service';
import { DoctorService } from './../../services/doctor.service';
import { PatientService } from './../../services/patient.service';
import { HttpClient } from '@angular/common/http';
import { Patient } from './../../models/patient';
import { Doctor } from 'src/app/models/doctor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit{
  reservationAddForm:FormGroup;
  doctor:Doctor[]=[]
  patient:Patient[]=[]
  
  constructor(private httpClient:HttpClient,private reservationService:ReservationService,private patientService:PatientService,private doctorService:DoctorService,private formBuilder:FormBuilder,private router:Router){ }
  ngOnInit(): void {
  this.getPatient()
  this.getDoctor()
  this.createPatientAddForm()
  }
  getPatient() {
    this.patientService.getPatient().subscribe(repsonse => {
      this.patient = repsonse.data  
    })
  }
  getDoctor() {
    this.doctorService.getDoctor().subscribe(repsonse => {
      this.doctor = repsonse.data  
    })
  }
  createPatientAddForm(){
    this.reservationAddForm=this.formBuilder.group({
      patientId:["",Validators.required],
      doctorId:["",Validators.required],
      reservationDate:["",Validators.required],
      reservationStatus:[true,Validators.required],
    })
  }
  add(){
   
    this.reservationAddForm.controls['reservationStatus'].setValue(true);
    if(this.reservationAddForm.valid){
      let categoryModel =Object.assign({},this.reservationAddForm.value) 
      console.log(categoryModel)
      this.reservationService.add(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin/listReservation"])
      });
    }
    else {
      console.log("Kategori Eklenemedi");
    } 
  }


}


