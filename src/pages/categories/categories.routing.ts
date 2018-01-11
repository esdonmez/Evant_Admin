import { Routes } from '@angular/router';

import { CategoriesComponent } from './categories.component';

export const CategoryRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: CategoriesComponent
        }]
    }
];
