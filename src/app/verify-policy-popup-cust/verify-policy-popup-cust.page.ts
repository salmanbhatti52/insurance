import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-policy-popup-cust',
  templateUrl: './verify-policy-popup-cust.page.html',
  styleUrls: ['./verify-policy-popup-cust.page.scss'],
})
export class VerifyPolicyPopupCustPage implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }
}
