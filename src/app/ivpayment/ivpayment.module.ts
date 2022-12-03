import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvpaymentPageRoutingModule } from './ivpayment-routing.module';

import { IvpaymentPage } from './ivpayment.page';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvpaymentPageRoutingModule,
    Angular4PaystackModule.forRoot(
      'pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f'
    ),
  ],
  declarations: [IvpaymentPage],
})
export class IvpaymentPageModule {}
