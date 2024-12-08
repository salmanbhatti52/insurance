import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicypaymentdetailPage } from './policypaymentdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PolicypaymentdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicypaymentdetailPageRoutingModule {}
