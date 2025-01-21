import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicypayPageRoutingModule } from './policypay-routing.module';

import { PolicypayPage } from './policypay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicypayPageRoutingModule
  ],
  declarations: [PolicypayPage]
})
export class PolicypayPageModule {}
