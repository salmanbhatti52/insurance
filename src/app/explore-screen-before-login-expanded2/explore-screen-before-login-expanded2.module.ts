import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreScreenBeforeLoginExpanded2PageRoutingModule } from './explore-screen-before-login-expanded2-routing.module';

import { ExploreScreenBeforeLoginExpanded2Page } from './explore-screen-before-login-expanded2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreScreenBeforeLoginExpanded2PageRoutingModule
  ],
  declarations: [ExploreScreenBeforeLoginExpanded2Page]
})
export class ExploreScreenBeforeLoginExpanded2PageModule {}
