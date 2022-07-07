import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprehensivequotePage } from './comprehensivequote.page';

const routes: Routes = [
  {
    path: '',
    component: ComprehensivequotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprehensivequotePageRoutingModule {}
