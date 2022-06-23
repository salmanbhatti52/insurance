import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreScreenBeforeLoginExpandedPageRoutingModule } from './explore-screen-before-login-expanded-routing.module';

import { ExploreScreenBeforeLoginExpandedPage } from './explore-screen-before-login-expanded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreScreenBeforeLoginExpandedPageRoutingModule
  ],
  declarations: [ExploreScreenBeforeLoginExpandedPage]
})
export class ExploreScreenBeforeLoginExpandedPageModule {}
