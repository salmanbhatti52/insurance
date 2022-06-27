import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUpdatePageRoutingModule } from './profile-update-routing.module';

import { ProfileUpdatePage } from './profile-update.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ProfileUpdatePageRoutingModule
  ],
  declarations: [ProfileUpdatePage]
})
export class ProfileUpdatePageModule {}
