import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentresponsePage } from './paymentresponse.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentresponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentresponsePageRoutingModule {}
