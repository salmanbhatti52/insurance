import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimassistance2',
  templateUrl: './claimassistance2.page.html',
  styleUrls: ['./claimassistance2.page.scss'],
})
export class Claimassistance2Page implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }

}
