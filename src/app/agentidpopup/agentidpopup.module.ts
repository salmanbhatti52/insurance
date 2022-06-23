import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentidpopupPageRoutingModule } from './agentidpopup-routing.module';

import { AgentidpopupPage } from './agentidpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentidpopupPageRoutingModule
  ],
  declarations: [AgentidpopupPage]
})
export class AgentidpopupPageModule {}
