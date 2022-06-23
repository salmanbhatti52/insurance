import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAClaimPageRoutingModule } from './make-a-claim-routing.module';

import { MakeAClaimPage } from './make-a-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeAClaimPageRoutingModule
  ],
  declarations: [MakeAClaimPage]
})
export class MakeAClaimPageModule {}
