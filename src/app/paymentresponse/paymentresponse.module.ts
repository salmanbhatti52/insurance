import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentresponsePageRoutingModule } from './paymentresponse-routing.module';

import { PaymentresponsePage } from './paymentresponse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentresponsePageRoutingModule
  ],
  declarations: [PaymentresponsePage]
})
export class PaymentresponsePageModule {}
