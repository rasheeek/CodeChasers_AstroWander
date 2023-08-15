import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../types/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {}

  // User related

  public getUserDetailsById(id : string): Observable<User> {
    return new Observable<User>((observer) => {
      const docRef = this.afs.doc(`users/${id}`);
      const userData = docRef.get().subscribe(
        (res: any) => {
          observer.next(res.data());
          observer.complete();
        },
        (err : any) => {
          observer.error(err);
        }
      );
    });
  }

  public updateUser(id: string, values: any): Observable<any> {
    return new Observable<any>((observer) => {
      const docRef = this.afs.doc(`users/${id}`);
      docRef.set(values,  { merge: true }).then(
        (res : any) => {
          observer.next(res);
          observer.complete();
        },
        (err : any) => {
          observer.error(err);
        }
      );
    });
  }

  public addUser(userDetails : any, id : string): Observable<any> {
    return new Observable<any>((observer) => {
      const docRef = this.afs.doc(`users/${id}`);
      docRef.set(userDetails).then(
        (res : any ) => {
          observer.next(res);
          observer.complete();
        },
        (err : any) => {
          observer.error(err);
        }
      );
    });
  }

  deleteUser(id: string) {
    return new Observable<any>((observer) => {
      const docRef = this.afs.doc(`users/${id}`);
      docRef.delete().then(
        (res : any) => {
          observer.next(res);
          observer.complete();
        },
        (err : any) => {
          observer.error(err);
        }
      );
    });
  }

  public listenToCurrentUser(email : string) {
    return this.afs
      .doc(`users/${email}`)
      .snapshotChanges()
      .pipe(
        map((changes : any) => {
          let data = changes.payload.data();
          return data;
        })
      );
  }
  
  public listenToCustomer(email : string) {
    return this.afs
      .doc(`stripe_customers/${email}`)
      .snapshotChanges()
      .pipe(
        map((changes : any) => {
          let data = changes.payload.data();
          return data;
        })
      );
  }


  public getUserByEmail(email : string){
    return this.afs
    .collection('users', (ref=> ref.where('email', '==', email)))
    .snapshotChanges()
    .pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }


}
