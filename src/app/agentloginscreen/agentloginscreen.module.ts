import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentloginscreenPageRoutingModule } from './agentloginscreen-routing.module';

import { AgentloginscreenPage } from './agentloginscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentloginscreenPageRoutingModule
  ],
  declarations: [AgentloginscreenPage]
})
export class AgentloginscreenPageModule {}
