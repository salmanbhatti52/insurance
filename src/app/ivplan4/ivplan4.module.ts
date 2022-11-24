import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ivplan4PageRoutingModule } from './ivplan4-routing.module';

import { Ivplan4Page } from './ivplan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ivplan4PageRoutingModule
  ],
  declarations: [Ivplan4Page]
})
export class Ivplan4PageModule {}
