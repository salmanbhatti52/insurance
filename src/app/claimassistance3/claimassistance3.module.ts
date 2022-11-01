import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Claimassistance3PageRoutingModule } from './claimassistance3-routing.module';

import { Claimassistance3Page } from './claimassistance3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Claimassistance3PageRoutingModule
  ],
  declarations: [Claimassistance3Page]
})
export class Claimassistance3PageModule {}
