import { Routes } from '@angular/router';
import { SearchHistoriesComponent } from 'pages/searchHistories/searchHistories.component';

export const SearchHistoriesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: SearchHistoriesComponent
        }]
    }
];
