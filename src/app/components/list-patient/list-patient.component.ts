import { PatientService } from './../../services/patient.service';
import { HttpClient } from '@angular/common/http';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit{
  patient:Patient[]=[]
  constructor(private httpClient:HttpClient,private patientService:PatientService){ }
  ngOnInit(): void {
  this.getPatient()
  }
  getPatient() {
    this.patientService.getPatient().subscribe(repsonse => {
      this.patient = repsonse.data  
    })
  }
  delete(patient:Patient){
    this.patientService.delete(patient).subscribe(response=>{
    
    });
  }
  passive(patient:Patient){
    this.patientService.passive(patient).subscribe(response=>{
    
    });
  }
  active(patient:Patient){
   this.patientService.active(patient).subscribe(response=>{
   });
  
  }

}
