import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutinfModule} from "./app-routinf.module";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutinfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
