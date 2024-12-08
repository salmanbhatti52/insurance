import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransrechistoryPageRoutingModule } from './transrechistory-routing.module';

import { TransrechistoryPage } from './transrechistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransrechistoryPageRoutingModule
  ],
  declarations: [TransrechistoryPage]
})
export class TransrechistoryPageModule {}
