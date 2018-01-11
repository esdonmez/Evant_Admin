import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRoutes } from 'pages/event/event.routing';
import { EventDetailComponent } from 'pages/event/eventdetail/eventdetail.component';
import { EventsComponent } from 'pages/event/events/events.component';
import { MaterialModule } from 'app/app.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EventRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    EventDetailComponent,
    EventsComponent
  ]
})
export class EventModule { }
