import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accident2Page } from './accident2.page';

const routes: Routes = [
  {
    path: '',
    component: Accident2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accident2PageRoutingModule {}
