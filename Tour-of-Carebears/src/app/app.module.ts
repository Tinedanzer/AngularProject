import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameComponent } from './name-labels.component';
import { TESTINGComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    TESTINGComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
