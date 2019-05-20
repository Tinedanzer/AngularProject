import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameComponent } from './name-labels.component';
import { TESTINGComponent } from './testing/testing.component';
import { NamesService } from './name-labels.service';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    TESTINGComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NamesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
