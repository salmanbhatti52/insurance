import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment2responsePageRoutingModule } from './payment2response-routing.module';

import { Payment2responsePage } from './payment2response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment2responsePageRoutingModule
  ],
  declarations: [Payment2responsePage]
})
export class Payment2responsePageModule {}
