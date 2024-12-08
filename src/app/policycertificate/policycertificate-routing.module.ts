import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicycertificatePage } from './policycertificate.page';

const routes: Routes = [
  {
    path: '',
    component: PolicycertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicycertificatePageRoutingModule {}
