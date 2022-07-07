import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdpartydetailsPage } from './thirdpartydetails.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdpartydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdpartydetailsPageRoutingModule {}
