import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentloginscreenPage } from './agentloginscreen.page';

const routes: Routes = [
  {
    path: '',
    component: AgentloginscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentloginscreenPageRoutingModule {}
