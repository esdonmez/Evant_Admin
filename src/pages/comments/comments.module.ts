import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { CommentsRoutes } from 'pages/comments/comments.routing';
import { CommentsComponent } from 'pages/comments/comments.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CommentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule
  ],
  declarations: [
    CommentsComponent
  ]
})
export class CommentsModule { }
