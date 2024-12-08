import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policy1Page } from './policy1.page';

const routes: Routes = [
  {
    path: '',
    component: Policy1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policy1PageRoutingModule {}
