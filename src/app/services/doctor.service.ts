import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel_Data } from '../models/responseModel_Data';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(doctor:Doctor){
    let newPath=this.apiUrls+"doctor/add";
    return this.httpClient.post(newPath,doctor)
   }
   getDoctor():Observable<ListResponseModel<Doctor>>{
    let newPath=this.apiUrls+"doctor/getall";
    return this.httpClient.get<ListResponseModel<Doctor>>(newPath)
  }
  getDoctorActive():Observable<ListResponseModel<Doctor>>{
    let newPath=this.apiUrls+"doctor/getallActive";
    return this.httpClient.get<ListResponseModel<Doctor>>(newPath)
  }
  getDoctorById(doctorID):Observable <ResponseModel_Data<Doctor>> {
    let newPath=this.apiUrls + "doctor/GetById/?id="+doctorID
    return this.httpClient
       .get<ResponseModel_Data<Doctor>>(newPath);
   }
  delete(doctor:Doctor){
    let newPath=this.apiUrls + "doctor/delete"
    return this.httpClient.post(newPath,doctor)
   }
   passive(doctor:Doctor){
    let newPath=this.apiUrls + "doctor/passive"
    return this.httpClient.post(newPath,doctor)
   }
   update(doctor:Doctor){
    let newPath=this.apiUrls+"doctor/update";
    return this.httpClient.post(newPath,doctor)
   }
   active(doctor:Doctor){
    let newPath=this.apiUrls + "doctor/active"
    return this.httpClient.post(newPath,doctor)
   }
}
