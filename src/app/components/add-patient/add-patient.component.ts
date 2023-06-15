import { PatientService } from './../../services/patient.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit{
  patientAddForm:FormGroup;
  constructor(private httpClient:HttpClient,private formBuilder:FormBuilder,private patientService:PatientService,private router:Router) { }
  ngOnInit(): void {
   this.createPatientAddForm()
  }
  createPatientAddForm(){
    this.patientAddForm=this.formBuilder.group({
      patientName:["",Validators.required],
      patientLastName:["",Validators.required],
      gender:[true,Validators.required],
    })
  }
  add(){
    if(this.patientAddForm.valid){
      let categoryModel =Object.assign({},this.patientAddForm.value) 
      this.patientService.add(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin/listPatient"])
      });
    }
    else {
      console.log("Kategori Eklenemedi");
    } 
  }

}
