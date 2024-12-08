import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransreceiptPage } from './transreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: TransreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransreceiptPageRoutingModule {}
