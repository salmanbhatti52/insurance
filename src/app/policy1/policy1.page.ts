import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy1',
  templateUrl: './policy1.page.html',
  styleUrls: ['./policy1.page.scss'],
})
export class Policy1Page implements OnInit {
  token: any;
  constructor(
    public location: Location,
    private http: HttpClient,
    public api: InsuranceAppService,
    public navctrl: NavController,
    public iab: InAppBrowser,
    public router: Router
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  goback() {
    this.location.back();
  }


  seeDetails() {
    this.router.navigate(['/viewpurchasedpolicy']);
  }

  purchaseNewPolicy() {
    const browser = this.iab.create(
      'https://cornerstone.com.ng/products/detail/Mjc=',
      '_system'
    );
  }

}
