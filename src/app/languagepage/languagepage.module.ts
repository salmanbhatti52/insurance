import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagepagePageRoutingModule } from './languagepage-routing.module';

import { LanguagepagePage } from './languagepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagepagePageRoutingModule
  ],
  declarations: [LanguagepagePage]
})
export class LanguagepagePageModule {}
