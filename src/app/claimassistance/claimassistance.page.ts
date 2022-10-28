import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimassistance',
  templateUrl: './claimassistance.page.html',
  styleUrls: ['./claimassistance.page.scss'],
})
export class ClaimassistancePage implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }

}
