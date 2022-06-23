import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPolicyScreenCustPage } from './verify-policy-screen-cust.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyPolicyScreenCustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyPolicyScreenCustPageRoutingModule {}
