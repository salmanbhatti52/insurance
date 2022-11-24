import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ivplan3PageRoutingModule } from './ivplan3-routing.module';

import { Ivplan3Page } from './ivplan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ivplan3PageRoutingModule
  ],
  declarations: [Ivplan3Page]
})
export class Ivplan3PageModule {}
