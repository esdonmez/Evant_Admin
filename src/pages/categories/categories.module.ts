import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryRoutes } from 'pages/categories/categories.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from 'pages/categories/categories.component';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NouisliderModule,
    DataTablesModule
  ],
  declarations: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
