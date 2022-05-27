import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForTrackByIdDirective } from './NgForTrackByIdDirective.directive';
import { TrackByPropertyDirective } from './TrackByPropertyDirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForTrackByIdDirective,
   TrackByPropertyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
