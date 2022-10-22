import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalsubproductPage } from './localsubproduct.page';

const routes: Routes = [
  {
    path: '',
    component: LocalsubproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalsubproductPageRoutingModule {}
