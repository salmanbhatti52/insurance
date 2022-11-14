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
      'pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f'
    ),
  ],
  declarations: [Payment2Page],
})
export class Payment2PageModule {}
