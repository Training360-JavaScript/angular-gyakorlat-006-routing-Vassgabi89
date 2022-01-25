import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './page/events-list/events-list.component';
import { EventDetailsComponent } from './page/event-details/event-details.component';

const routes: Routes = [
  {path: '', component: EventsListComponent},
  {path: 'details', component: EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
