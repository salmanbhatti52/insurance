import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextpaymentPageRoutingModule } from './nextpayment-routing.module';

import { NextpaymentPage } from './nextpayment.page';
import { Angular4PaystackModule } from 'angular4-paystack';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextpaymentPageRoutingModule,
    Angular4PaystackModule.forRoot('pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e')

  ],
  declarations: [NextpaymentPage]
})
export class NextpaymentPageModule { }
