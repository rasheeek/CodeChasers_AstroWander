import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IFlights, IPlanet } from '../types/type.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  collectionName = 'planets';
  flightCollectionName = 'flights';

  constructor(
    private afs: AngularFirestore
  ) { }

  getAllPlanets(){
    return this.afs
      .collection(this.collectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            
            const data = a.payload.doc.data() as IPlanet;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  getAllFlights(){
    return this.afs
      .collection(this.flightCollectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            
            const data = a.payload.doc.data() as IFlights;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
}
