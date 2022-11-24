import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ivplan1Page } from './ivplan1.page';

const routes: Routes = [
  {
    path: '',
    component: Ivplan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ivplan1PageRoutingModule {}
