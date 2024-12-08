import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicybtnPage } from './policybtn.page';

const routes: Routes = [
  {
    path: '',
    component: PolicybtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicybtnPageRoutingModule {}
