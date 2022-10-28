import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimassistancePageRoutingModule } from './claimassistance-routing.module';

import { ClaimassistancePage } from './claimassistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimassistancePageRoutingModule
  ],
  declarations: [ClaimassistancePage]
})
export class ClaimassistancePageModule {}
