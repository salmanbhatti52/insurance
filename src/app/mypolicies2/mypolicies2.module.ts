import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mypolicies2PageRoutingModule } from './mypolicies2-routing.module';

import { Mypolicies2Page } from './mypolicies2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mypolicies2PageRoutingModule
  ],
  declarations: [Mypolicies2Page]
})
export class Mypolicies2PageModule {}
