import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpScreenPageRoutingModule } from './sign-up-screen-routing.module';

import { SignUpScreenPage } from './sign-up-screen.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SignUpScreenPageRoutingModule
  ],
  declarations: [SignUpScreenPage]
})
export class SignUpScreenPageModule { }
