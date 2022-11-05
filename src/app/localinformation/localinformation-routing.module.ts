import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalinformationPage } from './localinformation.page';

const routes: Routes = [
  {
    path: '',
    component: LocalinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalinformationPageRoutingModule {}
