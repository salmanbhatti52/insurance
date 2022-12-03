import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvplanquotePageRoutingModule } from './ivplanquote-routing.module';

import { IvplanquotePage } from './ivplanquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvplanquotePageRoutingModule
  ],
  declarations: [IvplanquotePage]
})
export class IvplanquotePageModule {}
