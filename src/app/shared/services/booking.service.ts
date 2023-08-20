import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { IBooking, IPlanetShip } from '../types/type.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  collectionName = 'planet_ships';
  bookingCollectionName = 'bookings';
  selectedShip: IPlanetShip | null = null;
  bookings: IBooking | null = null;

  noOfAdults: number = 0;
  noOfChildren: number = 0;
  noOfInfants: number = 0;

  bookingId : string = '';


  scannedId : any = '';

  constructor(private afs: AngularFirestore) {}

  getAllShips() {
    return this.afs
      .collection(this.collectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as IPlanetShip;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  addBooking(data: IBooking) {
    return new Observable<any>((observer) => {
      this.afs
        .collection(this.bookingCollectionName)
        .add(data)
        .then((res) => {
          observer.next(res.id);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }

  getUserBookings(userId: string): Observable<IBooking[]> {
    return this.afs
      .collection(this.bookingCollectionName, (ref) =>
      ref.where('uid', '==', userId).orderBy("addedDate", "desc")
      )
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as IBooking;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
  
}
