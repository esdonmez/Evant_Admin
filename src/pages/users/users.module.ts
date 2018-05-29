import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from 'pages/users/users.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from 'pages/users/users.component';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NouisliderModule,
    DataTablesModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
