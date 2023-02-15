import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleinformationPageRoutingModule } from './vehicleinformation-routing.module';

import { VehicleinformationPage } from './vehicleinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleinformationPageRoutingModule
  ],
  declarations: [VehicleinformationPage]
})
export class VehicleinformationPageModule {}
