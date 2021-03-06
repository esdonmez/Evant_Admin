import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { EventRoutes } from 'pages/event/event.routing';
import { EventOperationsComponent } from 'pages/event/eventOperations/eventOperations.component';
import { EventsComponent } from 'pages/event/events/events.component';
import { MaterialModule } from 'app/app.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EventRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule
  ],
  declarations: [
    EventOperationsComponent,
    EventsComponent
  ]
})
export class EventModule { }
