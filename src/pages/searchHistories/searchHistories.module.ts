import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/app.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { SearchHistoriesRoutes } from 'pages/searchHistories/searchHistories.routing';
import { SearchHistoriesComponent } from 'pages/searchHistories/searchHistories.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchHistoriesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule
  ],
  declarations: [
    SearchHistoriesComponent
  ]
})
export class SearchHistoriesModule { }
