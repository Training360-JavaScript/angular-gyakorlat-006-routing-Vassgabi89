import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventsListComponent } from './page/events-list/events-list.component';
import { EventDetailsComponent } from './page/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventsListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
