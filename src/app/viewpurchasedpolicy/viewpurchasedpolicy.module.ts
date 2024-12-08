import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpurchasedpolicyPageRoutingModule } from './viewpurchasedpolicy-routing.module';

import { ViewpurchasedpolicyPage } from './viewpurchasedpolicy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpurchasedpolicyPageRoutingModule
  ],
  declarations: [ViewpurchasedpolicyPage]
})
export class ViewpurchasedpolicyPageModule {}
