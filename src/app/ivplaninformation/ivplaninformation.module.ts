import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvplaninformationPageRoutingModule } from './ivplaninformation-routing.module';

import { IvplaninformationPage } from './ivplaninformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvplaninformationPageRoutingModule
  ],
  declarations: [IvplaninformationPage]
})
export class IvplaninformationPageModule {}
