import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPolicyPopupCustPage } from './verify-policy-popup-cust.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyPolicyPopupCustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyPolicyPopupCustPageRoutingModule {}
