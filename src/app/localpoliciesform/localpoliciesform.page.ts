import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localpoliciesform',
  templateUrl: './localpoliciesform.page.html',
  styleUrls: ['./localpoliciesform.page.scss'],
})
export class LocalpoliciesformPage implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }
  goback(){
    this.location.back();
  }

}
