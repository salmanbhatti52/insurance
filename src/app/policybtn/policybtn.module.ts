import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicybtnPageRoutingModule } from './policybtn-routing.module';

import { PolicybtnPage } from './policybtn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicybtnPageRoutingModule
  ],
  declarations: [PolicybtnPage]
})
export class PolicybtnPageModule {}
