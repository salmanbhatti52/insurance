import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreScreenBeforeLoginPageRoutingModule } from './explore-screen-before-login-routing.module';

import { ExploreScreenBeforeLoginPage } from './explore-screen-before-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreScreenBeforeLoginPageRoutingModule
  ],
  declarations: [ExploreScreenBeforeLoginPage]
})
export class ExploreScreenBeforeLoginPageModule {}
