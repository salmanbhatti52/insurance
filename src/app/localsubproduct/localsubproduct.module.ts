import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalsubproductPageRoutingModule } from './localsubproduct-routing.module';

import { LocalsubproductPage } from './localsubproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalsubproductPageRoutingModule
  ],
  declarations: [LocalsubproductPage]
})
export class LocalsubproductPageModule {}
