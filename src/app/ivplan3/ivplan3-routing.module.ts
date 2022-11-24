import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ivplan3Page } from './ivplan3.page';

const routes: Routes = [
  {
    path: '',
    component: Ivplan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ivplan3PageRoutingModule {}
