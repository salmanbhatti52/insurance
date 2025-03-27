import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicypPage } from './policyp.page';

const routes: Routes = [
  {
    path: '',
    component: PolicypPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicypPageRoutingModule {}
