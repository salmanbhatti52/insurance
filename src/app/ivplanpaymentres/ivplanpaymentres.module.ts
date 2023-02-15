import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvplanpaymentresPageRoutingModule } from './ivplanpaymentres-routing.module';

import { IvplanpaymentresPage } from './ivplanpaymentres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvplanpaymentresPageRoutingModule
  ],
  declarations: [IvplanpaymentresPage]
})
export class IvplanpaymentresPageModule {}
