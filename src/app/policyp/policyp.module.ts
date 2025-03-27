import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicypPageRoutingModule } from './policyp-routing.module';

import { PolicypPage } from './policyp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicypPageRoutingModule
  ],
  declarations: [PolicypPage]
})
export class PolicypPageModule {}
