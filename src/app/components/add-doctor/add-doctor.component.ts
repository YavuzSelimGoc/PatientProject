import { DoctorService } from './../../services/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {
  doctorAddForm:FormGroup;
  constructor(private httpClient:HttpClient,private formBuilder:FormBuilder,private doctorService:DoctorService,private router:Router) { }
  ngOnInit(): void {
   this.createDoctorAddForm()
  }
  createDoctorAddForm(){
    this.doctorAddForm=this.formBuilder.group({
      doctorName:["",Validators.required],
      doctorLastName:["",Validators.required],
      departman:["",Validators.required],
      gender:[true,Validators.required],
    })
  }
  add(){
    if(this.doctorAddForm.valid){
      let categoryModel =Object.assign({},this.doctorAddForm.value) 
      this.doctorService.add(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin"])
      });
    }
    else {
      console.log("Kategori Eklenemedi");
    } 
  }

}
