import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Angular4PaystackModule } from 'angular4-paystack';
import { FlutterwaveModule } from "flutterwave-angular-v3"



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FlutterwaveModule,
    // pk_test_ff6f2927d464e23a6ddf592be475db01de695970
    Angular4PaystackModule.forRoot('pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e'),
  ],
  providers: [
    ReactiveFormsModule,
    FormsModule,
    InAppBrowser,
    FingerprintAIO,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
