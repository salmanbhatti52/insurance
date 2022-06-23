import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetQuotePageRoutingModule } from './get-quote-routing.module';

import { GetQuotePage } from './get-quote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetQuotePageRoutingModule
  ],
  declarations: [GetQuotePage]
})
export class GetQuotePageModule {}
