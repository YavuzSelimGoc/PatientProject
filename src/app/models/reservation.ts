export interface Reservation{
    reservationId:number,
    patientID: number,
    doctorID: number,
    reservationDate?:string
    reservationStatus?: boolean
}