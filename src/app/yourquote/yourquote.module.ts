import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourquotePageRoutingModule } from './yourquote-routing.module';

import { YourquotePage } from './yourquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourquotePageRoutingModule
  ],
  declarations: [YourquotePage]
})
export class YourquotePageModule {}
