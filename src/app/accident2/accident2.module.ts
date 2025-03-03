import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accident2PageRoutingModule } from './accident2-routing.module';

import { Accident2Page } from './accident2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accident2PageRoutingModule
  ],
  declarations: [Accident2Page]
})
export class Accident2PageModule {}
