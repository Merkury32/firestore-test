import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { DataService } from './data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  value;

  @ViewChild('entryForm') entryForm: AppComponent;

  ngOnInit() {
    this.addData();
    this.fetchData();
  }

  fetchData() {
      let x = this.entryForm.value.X;
      let y = this.entryForm.value.Y;
      let z = this.entryForm.value.Z;
      let w = this.entryForm.value.W;

    this.dataService.fetchData(x, y, z, w).subscribe(data => {
      console.log(data);
    })
  }

  addData() {
    let b = this.dataService.addData();
    console.log(b);
  }
}
