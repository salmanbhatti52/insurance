import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicylookupPageRoutingModule } from './policylookup-routing.module';

import { PolicylookupPage } from './policylookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicylookupPageRoutingModule
  ],
  declarations: [PolicylookupPage]
})
export class PolicylookupPageModule {}
