import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accident4PageRoutingModule } from './accident4-routing.module';

import { Accident4Page } from './accident4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accident4PageRoutingModule
  ],
  declarations: [Accident4Page]
})
export class Accident4PageModule {}
