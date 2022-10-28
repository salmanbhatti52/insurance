import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagepagePage } from './languagepage.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagepagePageRoutingModule {}
