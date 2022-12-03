import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvpaymentPage } from './ivpayment.page';

const routes: Routes = [
  {
    path: '',
    component: IvpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvpaymentPageRoutingModule {}
