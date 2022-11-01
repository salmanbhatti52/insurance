import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimassistance3',
  templateUrl: './claimassistance3.page.html',
  styleUrls: ['./claimassistance3.page.scss'],
})
export class Claimassistance3Page implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }

}
