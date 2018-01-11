import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventTagRoutes } from 'pages/eventtags/eventtags.routing';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables';
import { EventTagsComponent } from 'pages/eventtags/eventtags.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EventTagRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule
  ],
  declarations: [
    EventTagsComponent
  ]
})
export class EventTagsModule { }
