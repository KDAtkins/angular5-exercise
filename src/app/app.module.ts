import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogDetailsComponent } from './dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogDetailsComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
