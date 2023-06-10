import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit{
  patient:Patient
  patientUpdateForm:FormGroup
  constructor(private httpClient:HttpClient,private patientService:PatientService,
    private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private router:Router) {  }
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      if(params["patientID"]){
        this.getPatientyById(params["patientID"])
        }
      else{this.getPatientyById(params["patientID"])}
      })
  }
  getPatientyById(patientID:number){
    this.patientService.getPatientById(patientID).subscribe((response) => {
      this.patient=response.data;
   this.createPatientUpdateForm()
    });
  }
  createPatientUpdateForm(){
    this.patientUpdateForm=this.formBuilder.group({
      patientName:this.patient.patientName,
      patientLastName:this.patient.patientLastName,
      gender:this.patient.gender,
      patientStatus:this.patient.patientStatus,
      patientID:this.patient.patientID
    })
  }
  update(){
    if(this.patientUpdateForm.valid){
      let categoryModel =Object.assign({},this.patientUpdateForm.value) 
      this.patientService.update(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin/patientList"])

      });
    }
    else {

    } 
  }

}
