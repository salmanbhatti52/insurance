import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicylookupPage } from './policylookup.page';

const routes: Routes = [
  {
    path: '',
    component: PolicylookupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicylookupPageRoutingModule {}
