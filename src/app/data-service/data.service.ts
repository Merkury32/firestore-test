import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) { }

  addData() {


      // I: {name: 'Piotr', width: 20, height: 30}
      // II: {name: 'Maciej', width: 30, height: 30}
      // III: {name: 'Mikołaj', width: 20, height: 30}
      // IV: {name: 'Kacper', width: 40, height: 40}
      // V: {name: 'Jan', width: 50, height: 20}

      this.db.collection("data").doc('1').set({name: 'Piotr', width: 20, height: 30})
  }

  fetchData() {
    let dataRef = this.db.collection("data", ref => ref.where('width', '==', 20).where('height', '==', 30));

    return dataRef.valueChanges();

  }


}
