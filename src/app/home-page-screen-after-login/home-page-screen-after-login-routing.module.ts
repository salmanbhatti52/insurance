import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageScreenAfterLoginPage } from './home-page-screen-after-login.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageScreenAfterLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageScreenAfterLoginPageRoutingModule {}
