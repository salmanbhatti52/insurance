import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdpartydetailsPageRoutingModule } from './thirdpartydetails-routing.module';

import { ThirdpartydetailsPage } from './thirdpartydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdpartydetailsPageRoutingModule
  ],
  declarations: [ThirdpartydetailsPage]
})
export class ThirdpartydetailsPageModule { }
