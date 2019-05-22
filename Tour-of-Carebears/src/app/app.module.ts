import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here, not be confused w/ module
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
    BrowserModule,
    FormsModule
  ],
  providers: [
    NamesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
