import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { IPlanetShip } from '../types/type.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  collectionName = 'planet_ships';
  selectedShip : IPlanetShip | null = null;

  noOfAdults : number = 0 
  noOfChildren : number = 0
  noOfInfants : number = 0;
  

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
}
