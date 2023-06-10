import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit{
  doctor:Doctor
  doctorUpdateForm:FormGroup
  constructor(private httpClient:HttpClient,private doctorService:DoctorService,
    private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private router:Router) {  }
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      if(params["doctorID"]){
        this.getDoctoryById(params["doctorID"])
        }
      else{this.getDoctoryById(params["doctorID"])}
      })
  }
  getDoctoryById(doctorID:number){
    this.doctorService.getDoctorById(doctorID).subscribe((response) => {
      this.doctor=response.data;
   this.createDoctorUpdateForm()
    });
  }
  createDoctorUpdateForm(){
    this.doctorUpdateForm=this.formBuilder.group({
      doctorName:this.doctor.doctorName,
      doctorLastName:this.doctor.doctorLastName,
      gender:this.doctor.gender,
      status:this.doctor.status,
      departman:this.doctor.departman,
      doctorID:this.doctor.doctorID
    })
  }
  update(){
    if(this.doctorUpdateForm.valid){
      let categoryModel =Object.assign({},this.doctorUpdateForm.value) 
      this.doctorService.update(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin/doctorList"])

      });
    }
    else {

    } 
  }

}
