import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprehensivequote',
  templateUrl: './comprehensivequote.page.html',
  styleUrls: ['./comprehensivequote.page.scss'],
})
export class ComprehensivequotePage implements OnInit {
  gibsproduct: any;
  productname: any;

  constructor(public location: Location,
    public router: Router) { }

  ngOnInit() {
    this.gibsproduct = JSON.parse(localStorage.getItem('gibsproduct'));
    this.productname = this.gibsproduct.productName
  }

  goback() {
    this.location.back()
  }

  goto() {
    this.router.navigate(['gibsplans']);
  }
}
