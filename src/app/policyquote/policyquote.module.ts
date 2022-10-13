import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyquotePageRoutingModule } from './policyquote-routing.module';

import { PolicyquotePage } from './policyquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyquotePageRoutingModule
  ],
  declarations: [PolicyquotePage]
})
export class PolicyquotePageModule {}
