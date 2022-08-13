import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayquotePage } from './payquote.page';

const routes: Routes = [
  {
    path: '',
    component: PayquotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayquotePageRoutingModule {}
