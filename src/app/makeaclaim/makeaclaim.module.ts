import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeaclaimPageRoutingModule } from './makeaclaim-routing.module';

import { MakeaclaimPage } from './makeaclaim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeaclaimPageRoutingModule
  ],
  declarations: [MakeaclaimPage]
})
export class MakeaclaimPageModule {}
