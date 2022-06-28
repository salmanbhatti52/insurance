import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarInsuranceDetailsPageRoutingModule } from './car-insurance-details-routing.module';

import { CarInsuranceDetailsPage } from './car-insurance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarInsuranceDetailsPageRoutingModule
  ],
  declarations: [CarInsuranceDetailsPage]
})
export class CarInsuranceDetailsPageModule {}
