import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicycertificatePageRoutingModule } from './policycertificate-routing.module';

import { PolicycertificatePage } from './policycertificate.page';
// import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicycertificatePageRoutingModule,
    // PdfViewerModule
  ],
  declarations: [PolicycertificatePage]
})
export class PolicycertificatePageModule { }
