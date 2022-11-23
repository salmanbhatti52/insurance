import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mypolicies2Page } from './mypolicies2.page';

const routes: Routes = [
  {
    path: '',
    component: Mypolicies2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mypolicies2PageRoutingModule {}
