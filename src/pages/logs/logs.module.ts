import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { LogRoutes } from 'pages/logs/logs.routing';
import { LogsComponent } from 'pages/logs/logs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LogRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule
  ],
  declarations: [
    LogsComponent
  ]
})
export class LogsModule { }
