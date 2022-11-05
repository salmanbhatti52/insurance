import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalinformationPageRoutingModule } from './localinformation-routing.module';

import { LocalinformationPage } from './localinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalinformationPageRoutingModule
  ],
  declarations: [LocalinformationPage]
})
export class LocalinformationPageModule {}
