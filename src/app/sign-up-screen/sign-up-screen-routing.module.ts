import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpScreenPage } from './sign-up-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpScreenPageRoutingModule {}
