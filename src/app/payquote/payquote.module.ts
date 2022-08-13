import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayquotePageRoutingModule } from './payquote-routing.module';

import { PayquotePage } from './payquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayquotePageRoutingModule
  ],
  declarations: [PayquotePage]
})
export class PayquotePageModule {}
