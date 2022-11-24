import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ivplan1PageRoutingModule } from './ivplan1-routing.module';

import { Ivplan1Page } from './ivplan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ivplan1PageRoutingModule
  ],
  declarations: [Ivplan1Page]
})
export class Ivplan1PageModule {}
