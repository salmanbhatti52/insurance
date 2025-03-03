import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accident3Page } from './accident3.page';

const routes: Routes = [
  {
    path: '',
    component: Accident3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accident3PageRoutingModule {}
