import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransreceiptPageRoutingModule } from './transreceipt-routing.module';

import { TransreceiptPage } from './transreceipt.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransreceiptPageRoutingModule,
    // PdfViewerModule
  ],
  declarations: [TransreceiptPage]
})
export class TransreceiptPageModule {}
