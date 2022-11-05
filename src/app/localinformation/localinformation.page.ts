import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localinformation',
  templateUrl: './localinformation.page.html',
  styleUrls: ['./localinformation.page.scss'],
})
export class LocalinformationPage implements OnInit {
  subProName: any;

  constructor(public location:Location,
    public router:Router) { }

  ngOnInit() {
  }

  goback(){
    this.location.back()
  }

  ionViewWillEnter(){
    this.subProName = localStorage.getItem('subProName')
    console.log(' this.subProName-----', this.subProName);
  }

  goto(){
    this.router.navigate(['/localpoliciesform']);
  }

}
