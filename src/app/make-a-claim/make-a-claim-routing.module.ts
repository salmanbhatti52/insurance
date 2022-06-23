import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeAClaimPage } from './make-a-claim.page';

const routes: Routes = [
  {
    path: '',
    component: MakeAClaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeAClaimPageRoutingModule {}
