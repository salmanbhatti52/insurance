import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentpopupPageRoutingModule } from './paymentpopup-routing.module';

import { PaymentpopupPage } from './paymentpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentpopupPageRoutingModule
  ],
  declarations: [PaymentpopupPage]
})
export class PaymentpopupPageModule {}
