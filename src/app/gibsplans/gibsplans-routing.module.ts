import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GibsplansPage } from './gibsplans.page';

const routes: Routes = [
  {
    path: '',
    component: GibsplansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GibsplansPageRoutingModule {}
