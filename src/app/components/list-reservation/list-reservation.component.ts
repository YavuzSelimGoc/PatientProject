import { ReservationDto } from './../../models/reservationDto';
import { ReservationService } from './../../services/reservation.service';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent implements OnInit{
  reservation:Reservation
  reservationDto:ReservationDto[]=[]
  constructor(private httpClient:HttpClient,private reservationService:ReservationService){ }
  ngOnInit(): void {
  this.getPatient()
  }
  getPatient() {
    this.reservationService.getReservationDto().subscribe(repsonse => {
      this.reservationDto = repsonse.data  
    })
  }
  getReservationyById(reservationID:number){
    this.reservationService.getReservationById(reservationID).subscribe((response) => {
      this.reservation=response.data;
    });
  }
  delete(reservations:ReservationDto){
    this.getReservationyById(reservations.reservationId)
    
    this.reservationService.delete(this.reservation).subscribe(response=>{
    
    });
  }
  passive(reservations:ReservationDto){
    this.getReservationyById(reservations.reservationId)
    this.reservationService.passive(this.reservation).subscribe(response=>{
    
    });
  }
  active(reservations:ReservationDto){
    this.getReservationyById(reservations.reservationId)
   this.reservationService.active(this.reservation).subscribe(response=>{
   });
  
  }

}
