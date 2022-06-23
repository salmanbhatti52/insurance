import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPolicyPopupCustPageRoutingModule } from './verify-policy-popup-cust-routing.module';

import { VerifyPolicyPopupCustPage } from './verify-policy-popup-cust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPolicyPopupCustPageRoutingModule
  ],
  declarations: [VerifyPolicyPopupCustPage]
})
export class VerifyPolicyPopupCustPageModule {}
