import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {CityFeatureCityModule} from "@faster-with-plugins/city/feature-city";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, CityFeatureCityModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
