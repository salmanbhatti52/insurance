import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accident3PageRoutingModule } from './accident3-routing.module';

import { Accident3Page } from './accident3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accident3PageRoutingModule
  ],
  declarations: [Accident3Page]
})
export class Accident3PageModule {}
