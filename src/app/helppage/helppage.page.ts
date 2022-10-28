import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }


  goback() {
    this.location.back();
  }


}
