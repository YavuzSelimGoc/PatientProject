import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel_Data } from '../models/responseModel_Data';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(patient:Patient){
    let newPath=this.apiUrls+"patient/add";
    return this.httpClient.post(newPath,patient)
   }
   getPatient():Observable<ListResponseModel<Patient>>{
    let newPath=this.apiUrls+"patient/getall";
    return this.httpClient.get<ListResponseModel<Patient>>(newPath)
  }
  getPatientActive():Observable<ListResponseModel<Patient>>{
    let newPath=this.apiUrls+"patient/getallActive";
    return this.httpClient.get<ListResponseModel<Patient>>(newPath)
  }
  getPatientById(patientID):Observable <ResponseModel_Data<Patient>> {
    let newPath=this.apiUrls + "patient/GetById/?id="+patientID
    return this.httpClient
       .get<ResponseModel_Data<Patient>>(newPath);
   }
  delete(patient:Patient){
    let newPath=this.apiUrls + "patient/delete"
    return this.httpClient.post(newPath,patient)
   }
   passive(patient:Patient){
    let newPath=this.apiUrls + "patient/passive"
    return this.httpClient.post(newPath,patient)
   }
   update(patient:Patient){
    let newPath=this.apiUrls+"patient/update";
    return this.httpClient.post(newPath,patient)
   }
   active(patient:Patient){
    let newPath=this.apiUrls + "patient/active"
    return this.httpClient.post(newPath,patient)
   }
}
