import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalpoliciesformPage } from './localpoliciesform.page';

const routes: Routes = [
  {
    path: '',
    component: LocalpoliciesformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalpoliciesformPageRoutingModule {}
