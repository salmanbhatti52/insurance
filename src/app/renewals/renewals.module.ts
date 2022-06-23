import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewalsPageRoutingModule } from './renewals-routing.module';

import { RenewalsPage } from './renewals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewalsPageRoutingModule
  ],
  declarations: [RenewalsPage]
})
export class RenewalsPageModule {}
