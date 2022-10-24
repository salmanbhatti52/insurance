import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-policyquote',
  templateUrl: './policyquote.page.html',
  styleUrls: ['./policyquote.page.scss'],
})
export class PolicyquotePage implements OnInit {
  getproduct: any;
  Gproduct: any;
  constructor(public location: Location) { }

  goback() {
    this.location.back()
  }
  ngOnInit() {
    this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'))
    console.log('', this.Gproduct);
    this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));

    console.log('dsadsads', this.getproduct);
    console.log('dsadsads', localStorage.getItem('gibsProductres'));

  }

}
