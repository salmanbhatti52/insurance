import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransrechistoryPage } from './transrechistory.page';

const routes: Routes = [
  {
    path: '',
    component: TransrechistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransrechistoryPageRoutingModule {}
