import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalinformationPage } from './internationalinformation.page';

const routes: Routes = [
  {
    path: '',
    component: InternationalinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternationalinformationPageRoutingModule {}
