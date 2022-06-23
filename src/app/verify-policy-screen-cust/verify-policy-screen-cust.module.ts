import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPolicyScreenCustPageRoutingModule } from './verify-policy-screen-cust-routing.module';

import { VerifyPolicyScreenCustPage } from './verify-policy-screen-cust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPolicyScreenCustPageRoutingModule
  ],
  declarations: [VerifyPolicyScreenCustPage]
})
export class VerifyPolicyScreenCustPageModule {}
