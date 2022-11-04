import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GibsproductsPageRoutingModule } from './gibsproducts-routing.module';

import { GibsproductsPage } from './gibsproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GibsproductsPageRoutingModule
  ],
  declarations: [GibsproductsPage]
})
export class GibsproductsPageModule {}
