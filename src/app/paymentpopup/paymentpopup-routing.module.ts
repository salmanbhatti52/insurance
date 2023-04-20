import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentpopupPage } from './paymentpopup.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentpopupPageRoutingModule {}
