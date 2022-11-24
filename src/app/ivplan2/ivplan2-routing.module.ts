import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ivplan2Page } from './ivplan2.page';

const routes: Routes = [
  {
    path: '',
    component: Ivplan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ivplan2PageRoutingModule {}
