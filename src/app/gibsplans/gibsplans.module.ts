import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GibsplansPageRoutingModule } from './gibsplans-routing.module';

import { GibsplansPage } from './gibsplans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GibsplansPageRoutingModule
  ],
  declarations: [GibsplansPage]
})
export class GibsplansPageModule {}
