import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypoliciesPageRoutingModule } from './mypolicies-routing.module';

import { MypoliciesPage } from './mypolicies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypoliciesPageRoutingModule
  ],
  declarations: [MypoliciesPage]
})
export class MypoliciesPageModule {}
