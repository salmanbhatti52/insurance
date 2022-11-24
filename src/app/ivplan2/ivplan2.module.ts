import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ivplan2PageRoutingModule } from './ivplan2-routing.module';

import { Ivplan2Page } from './ivplan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ivplan2PageRoutingModule
  ],
  declarations: [Ivplan2Page]
})
export class Ivplan2PageModule {}
