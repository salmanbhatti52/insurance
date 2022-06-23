import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VerifyPolicyPopupCustPage } from '../verify-policy-popup-cust/verify-policy-popup-cust.page';
@Component({
  selector: 'app-verify-policy-screen-cust',
  templateUrl: './verify-policy-screen-cust.page.html',
  styleUrls: ['./verify-policy-screen-cust.page.scss'],
})
export class VerifyPolicyScreenCustPage implements OnInit {
  show = false;
  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]
  constructor(public modal: ModalController,
    public location: Location,
    public router: Router) { }

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
    const modal = await this.modal.create({
      component: VerifyPolicyPopupCustPage,
      cssClass: 'PolicyPopupCust',
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data)
    });
    return await modal.present();
  }
}
