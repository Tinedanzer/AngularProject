import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameComponent } from './name-labels.component';
import { NamesService } from './name-labels.service';
import { CarebearsComponent } from './carebears/carebears.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    CarebearsComponent
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
