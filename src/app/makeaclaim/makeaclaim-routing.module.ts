import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeaclaimPage } from './makeaclaim.page';

const routes: Routes = [
  {
    path: '',
    component: MakeaclaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeaclaimPageRoutingModule {}
