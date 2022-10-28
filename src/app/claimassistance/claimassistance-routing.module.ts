import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimassistancePage } from './claimassistance.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimassistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimassistancePageRoutingModule {}
