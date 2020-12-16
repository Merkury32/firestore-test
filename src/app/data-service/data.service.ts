import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) { }

  width = 0;
  height = 0;

  addData() {
    // let k = 0;
    // for (let i = 1; i <= 100; i++) {
    //   this.width = i;
    //   for (let j = 1; j <= 100; j++) {
    //     this.height = j;
    //     k++;
    //     this.db.collection("data").doc(k.toString()).set({name: 'Test', width: this.width, height: this.height})
    //   }
    // }
  }

  fetchData(x, y, z, w) {
    let dataRef = this.db.collection("data", ref => ref.where('width', '<', x).where('width', '>', y).where('height', '<', w).where('height', '>', z));

    return dataRef.valueChanges();
  }


}
