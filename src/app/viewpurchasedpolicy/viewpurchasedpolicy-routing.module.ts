import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpurchasedpolicyPage } from './viewpurchasedpolicy.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpurchasedpolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpurchasedpolicyPageRoutingModule {}
