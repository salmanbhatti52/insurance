import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ivplan4Page } from './ivplan4.page';

const routes: Routes = [
  {
    path: '',
    component: Ivplan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ivplan4PageRoutingModule {}
