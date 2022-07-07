import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirdpartydetails',
  templateUrl: './thirdpartydetails.page.html',
  styleUrls: ['./thirdpartydetails.page.scss'],
})
export class ThirdpartydetailsPage implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }
}
