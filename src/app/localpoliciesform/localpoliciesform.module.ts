import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalpoliciesformPageRoutingModule } from './localpoliciesform-routing.module';

import { LocalpoliciesformPage } from './localpoliciesform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalpoliciesformPageRoutingModule
  ],
  declarations: [LocalpoliciesformPage]
})
export class LocalpoliciesformPageModule {}
