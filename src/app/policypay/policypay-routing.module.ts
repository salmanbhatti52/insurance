import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicypayPage } from './policypay.page';

const routes: Routes = [
  {
    path: '',
    component: PolicypayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicypayPageRoutingModule {}
