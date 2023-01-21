import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment2responsePage } from './payment2response.page';

const routes: Routes = [
  {
    path: '',
    component: Payment2responsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment2responsePageRoutingModule {}
