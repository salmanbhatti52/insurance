import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accident4Page } from './accident4.page';

const routes: Routes = [
  {
    path: '',
    component: Accident4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accident4PageRoutingModule {}
