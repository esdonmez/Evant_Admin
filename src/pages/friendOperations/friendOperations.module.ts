import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { FriendOperationsRoutes } from 'pages/friendOperations/friendOperations.routing';
import { FriendOperationsComponent } from 'pages/friendOperations/friendOperations.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FriendOperationsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule
  ],
  declarations: [
    FriendOperationsComponent
  ]
})
export class FriendOperationsModule { }
