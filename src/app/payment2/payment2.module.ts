import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment2PageRoutingModule } from './payment2-routing.module';

import { Payment2Page } from './payment2.page';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment2PageRoutingModule,
    Angular4PaystackModule.forRoot(
      'pk_test_ff6f2927d464e23a6ddf592be475db01de695970'
    ),
  ],
  declarations: [Payment2Page],
})
export class Payment2PageModule { }
