import { DoctorService } from './../../services/doctor.service';
import { PatientService } from './../../services/patient.service';
import { ReservationService } from './../../services/reservation.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from './../../models/reservation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit{
  reservation:Reservation
  doctor:Doctor[]=[]
  patient:Patient[]=[]
  doctorId:number
  reservationUpdateForm:FormGroup
  constructor(private httpClient:HttpClient,private reservationService:ReservationService,private patientService:PatientService,private doctorService:DoctorService,
    private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      if(params["reservationID"]){
        this.getReservationyById(params["reservationID"])
        this.getDoctor()
        this.getPatient()
      
        }
      else{this.getReservationyById(params["reservationID"])}
      this.getDoctor()
      this.getPatient()
      })
  }
  getReservationyById(reservationID:number){
    this.reservationService.getReservationById(reservationID).subscribe((response) => {
      this.reservation=response.data;
    
   this.createReservationUpdateForm()
    });
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
  createReservationUpdateForm(){
  
    this.reservationUpdateForm=this.formBuilder.group({
      reservationId:this.reservation.reservationId,
      patientId:this.reservation.patientID,
      doctorId:this.reservation.doctorID,
      reservationStatus:this.reservation.reservationStatus,
      reservationDate:this.reservation.reservationDate
    })
  }
  createPatientAddForm(){
    this.reservationUpdateForm=this.formBuilder.group({
      patientId:["",Validators.required],
      doctorId:["",Validators.required],
      reservationDate:["",Validators.required],
      reservationStatus:[true,Validators.required],
    })
  }
  update(){
    this.reservationUpdateForm.controls['patientId'].setValue(this.reservation.patientID);
    this.reservationUpdateForm.controls['doctorId'].setValue(this.reservation.doctorID);
    if(this.reservationUpdateForm.valid){
      let categoryModel =Object.assign({},this.reservationUpdateForm.value) 
      this.reservationService.update(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin/listReservation"])
      });
    }
    else {

    } 
  }

}
