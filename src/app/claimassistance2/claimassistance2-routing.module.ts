import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Claimassistance2Page } from './claimassistance2.page';

const routes: Routes = [
  {
    path: '',
    component: Claimassistance2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Claimassistance2PageRoutingModule {}
