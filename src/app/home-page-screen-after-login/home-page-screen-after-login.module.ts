import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageScreenAfterLoginPageRoutingModule } from './home-page-screen-after-login-routing.module';

import { HomePageScreenAfterLoginPage } from './home-page-screen-after-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageScreenAfterLoginPageRoutingModule
  ],
  declarations: [HomePageScreenAfterLoginPage]
})
export class HomePageScreenAfterLoginPageModule {}
