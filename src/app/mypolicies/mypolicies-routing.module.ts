import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypoliciesPage } from './mypolicies.page';

const routes: Routes = [
  {
    path: '',
    component: MypoliciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypoliciesPageRoutingModule {}
