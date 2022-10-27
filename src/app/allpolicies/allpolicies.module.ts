import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllpoliciesPageRoutingModule } from './allpolicies-routing.module';

import { AllpoliciesPage } from './allpolicies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllpoliciesPageRoutingModule
  ],
  declarations: [AllpoliciesPage]
})
export class AllpoliciesPageModule {}
