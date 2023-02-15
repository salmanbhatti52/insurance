import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvplaninformationPage } from './ivplaninformation.page';

const routes: Routes = [
  {
    path: '',
    component: IvplaninformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvplaninformationPageRoutingModule {}
