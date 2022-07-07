import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprehensivequotePageRoutingModule } from './comprehensivequote-routing.module';

import { ComprehensivequotePage } from './comprehensivequote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprehensivequotePageRoutingModule
  ],
  declarations: [ComprehensivequotePage]
})
export class ComprehensivequotePageModule {}
