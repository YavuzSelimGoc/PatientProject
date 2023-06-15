export interface ReservationDto{
    reservationId:number,
    patientName: string,
    doctorName: string,
    reservationDate?:string
    reservationStatus?:boolean
}