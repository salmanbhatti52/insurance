import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accident1Page } from './accident1.page';

const routes: Routes = [
  {
    path: '',
    component: Accident1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accident1PageRoutingModule {}
