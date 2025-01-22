import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicystatementPageRoutingModule } from './policystatement-routing.module';

import { PolicystatementPage } from './policystatement.page';
// import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicystatementPageRoutingModule,
    // PdfViewerModule
  ],
  declarations: [PolicystatementPage]
})
export class PolicystatementPageModule { }
