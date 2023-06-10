import { DoctorService } from './../../services/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './../../models/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit{
  doctor:Doctor[]=[]
  constructor(private httpClient:HttpClient,private doctorService:DoctorService){ }
  ngOnInit(): void {
  this.getDoctor()
  }
  getDoctor() {
    this.doctorService.getDoctor().subscribe(repsonse => {
      this.doctor = repsonse.data  
    })
  }
  delete(doctor:Doctor){
    this.doctorService.delete(doctor).subscribe(response=>{
    
    });
  }
  passive(doctor:Doctor){
    this.doctorService.passive(doctor).subscribe(response=>{
    
    });
  }
  active(doctor:Doctor){
   this.doctorService.active(doctor).subscribe(response=>{
   });
  
  }

}
