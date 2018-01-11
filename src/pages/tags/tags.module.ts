import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { NouisliderModule } from 'ng2-nouislider';
import { TagsComponent } from 'pages/tags/tags.component';
import { TagRoutes } from 'pages/tags/tags.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TagRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NouisliderModule,
    DataTablesModule
  ],
  declarations: [
    TagsComponent
  ]
})
export class TagsModule { }
