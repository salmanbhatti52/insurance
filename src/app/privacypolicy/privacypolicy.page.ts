import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.page.html',
  styleUrls: ['./privacypolicy.page.scss'],
})
export class PrivacypolicyPage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }

   goback() {
    this.location.back();
  }

}
