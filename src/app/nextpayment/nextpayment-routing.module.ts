import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextpaymentPage } from './nextpayment.page';

const routes: Routes = [
  {
    path: '',
    component: NextpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextpaymentPageRoutingModule {}
