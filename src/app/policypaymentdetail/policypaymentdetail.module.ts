import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicypaymentdetailPageRoutingModule } from './policypaymentdetail-routing.module';

import { PolicypaymentdetailPage } from './policypaymentdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicypaymentdetailPageRoutingModule
  ],
  declarations: [PolicypaymentdetailPage]
})
export class PolicypaymentdetailPageModule {}
