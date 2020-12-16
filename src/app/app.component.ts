import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.addData();
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe(data => {
      console.log(data);
    })
  }

  addData() {
    let b = this.dataService.addData();
    console.log(b);
  }
}
