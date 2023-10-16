import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MovementsPageModule} from "./pages/movements/movements.page.module";
import {MovementsFacade} from "./facades/movements.facade";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MovementsPageModule,
    HttpClientModule
  ],
  providers: [MovementsFacade],
  bootstrap: [AppComponent]
})
export class AppModule {
}
