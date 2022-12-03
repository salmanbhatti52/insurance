import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvplanquotePage } from './ivplanquote.page';

const routes: Routes = [
  {
    path: '',
    component: IvplanquotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvplanquotePageRoutingModule {}
