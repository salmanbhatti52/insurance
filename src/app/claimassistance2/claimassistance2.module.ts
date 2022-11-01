import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Claimassistance2PageRoutingModule } from './claimassistance2-routing.module';

import { Claimassistance2Page } from './claimassistance2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Claimassistance2PageRoutingModule
  ],
  declarations: [Claimassistance2Page]
})
export class Claimassistance2PageModule {}
