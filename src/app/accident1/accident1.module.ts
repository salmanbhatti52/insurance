import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accident1PageRoutingModule } from './accident1-routing.module';

import { Accident1Page } from './accident1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accident1PageRoutingModule
  ],
  declarations: [Accident1Page]
})
export class Accident1PageModule {}
