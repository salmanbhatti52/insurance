import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetQuotePage } from './get-quote.page';

const routes: Routes = [
  {
    path: '',
    component: GetQuotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetQuotePageRoutingModule {}
