import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentidpopupPage } from './agentidpopup.page';

const routes: Routes = [
  {
    path: '',
    component: AgentidpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentidpopupPageRoutingModule {}
