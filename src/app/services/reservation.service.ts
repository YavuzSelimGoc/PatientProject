import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/reservation';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel_Data } from '../models/responseModel_Data';
import { ReservationDto } from '../models/reservationDto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(reservation:Reservation){
    let newPath=this.apiUrls+"reservation/add";
    return this.httpClient.post(newPath,reservation)
   }
   getReservation():Observable<ListResponseModel<Reservation>>{
    let newPath=this.apiUrls+"reservation/getall";
    return this.httpClient.get<ListResponseModel<Reservation>>(newPath)
  }
  getReservationDto():Observable<ListResponseModel<ReservationDto>>{
    let newPath=this.apiUrls+"reservation/getalldto";
    return this.httpClient.get<ListResponseModel<ReservationDto>>(newPath)
  }
  getReservationActive():Observable<ListResponseModel<Reservation>>{
    let newPath=this.apiUrls+"reservation/getallActive";
    return this.httpClient.get<ListResponseModel<Reservation>>(newPath)
  }
  getReservationById(reservationID):Observable <ResponseModel_Data<Reservation>> {
    let newPath=this.apiUrls + "reservation/GetById/?id="+reservationID
    return this.httpClient
       .get<ResponseModel_Data<Reservation>>(newPath);
   }
  delete(reservation:Reservation){
    let newPath=this.apiUrls + "reservation/delete"
    return this.httpClient.post(newPath,reservation)
   }
   passive(reservation:Reservation){
    let newPath=this.apiUrls + "reservation/passive"
    return this.httpClient.post(newPath,reservation)
   }
   update(reservation:Reservation){
    let newPath=this.apiUrls+"reservation/update";
    return this.httpClient.post(newPath,reservation)
   }
   active(reservation:Reservation){
    let newPath=this.apiUrls + "reservation/active"
    return this.httpClient.post(newPath,reservation)
   }
}
