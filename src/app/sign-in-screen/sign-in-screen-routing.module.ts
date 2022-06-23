import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInScreenPage } from './sign-in-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SignInScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInScreenPageRoutingModule {}
