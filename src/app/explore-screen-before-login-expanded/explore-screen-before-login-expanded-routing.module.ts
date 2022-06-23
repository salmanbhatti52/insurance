import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreScreenBeforeLoginExpandedPage } from './explore-screen-before-login-expanded.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreScreenBeforeLoginExpandedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreScreenBeforeLoginExpandedPageRoutingModule {}
