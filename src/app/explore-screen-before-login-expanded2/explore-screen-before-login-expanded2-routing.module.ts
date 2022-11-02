import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreScreenBeforeLoginExpanded2Page } from './explore-screen-before-login-expanded2.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreScreenBeforeLoginExpanded2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreScreenBeforeLoginExpanded2PageRoutingModule {}
