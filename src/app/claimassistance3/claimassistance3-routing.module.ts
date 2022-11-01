import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Claimassistance3Page } from './claimassistance3.page';

const routes: Routes = [
  {
    path: '',
    component: Claimassistance3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Claimassistance3PageRoutingModule {}
