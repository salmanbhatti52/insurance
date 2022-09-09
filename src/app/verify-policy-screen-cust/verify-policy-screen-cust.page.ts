import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VerifyPolicyPopupCustPage } from '../verify-policy-popup-cust/verify-policy-popup-cust.page';
import axios from 'axios';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-verify-policy-screen-cust',
  templateUrl: './verify-policy-screen-cust.page.html',
  styleUrls: ['./verify-policy-screen-cust.page.scss'],
})
export class VerifyPolicyScreenCustPage implements OnInit {
  show = false;
  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]
  pnumber: any;
  config: { method: string; url: string; headers: { Authorization: string; Cookie: string; 'Content-Type': string; }; };
  constructor(public modal: ModalController,
    public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    private http: HttpClient,) { }

  ngOnInit() {
  }

  goback() {
    this.router.navigate(['/home-page-screen-after-login'])
  }
  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance
    this.show = false
  }
  async PopupCust() {
    this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=160&polnum2=CHEF/2011/04/02072', localStorage.getItem('token')).subscribe((response) => {
      console.log(response);
    });

    // const modal = await this.modal.create({
    //   component: VerifyPolicyPopupCustPage,
    //   cssClass: 'PolicyPopupCust',
    // });
    // modal.onDidDismiss().then((data) => {
    //   console.log('data', data)
    // });
    // return await modal.present();
  }
}
