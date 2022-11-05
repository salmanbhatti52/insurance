import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternationalinformationPageRoutingModule } from './internationalinformation-routing.module';

import { InternationalinformationPage } from './internationalinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternationalinformationPageRoutingModule
  ],
  declarations: [InternationalinformationPage]
})
export class InternationalinformationPageModule {}
