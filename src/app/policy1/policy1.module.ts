import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Policy1PageRoutingModule } from './policy1-routing.module';

import { Policy1Page } from './policy1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policy1PageRoutingModule
  ],
  declarations: [Policy1Page]
})
export class Policy1PageModule {}
