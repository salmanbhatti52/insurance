import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarInsuranceDetailsPage } from './car-insurance-details.page';

const routes: Routes = [
  {
    path: '',
    component: CarInsuranceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarInsuranceDetailsPageRoutingModule {}
