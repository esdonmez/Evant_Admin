import { Routes } from '@angular/router';

import { UsersComponent } from './users.component';

export const UserRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: UsersComponent
        }]
    }
];
