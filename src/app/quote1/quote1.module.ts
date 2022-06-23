import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quote1PageRoutingModule } from './quote1-routing.module';

import { Quote1Page } from './quote1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quote1PageRoutingModule
  ],
  declarations: [Quote1Page]
})
export class Quote1PageModule {}
