import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyquotePage } from './policyquote.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyquotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyquotePageRoutingModule {}
