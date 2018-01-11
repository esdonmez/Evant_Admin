import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        }, {
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        }, {
            path: 'categories',
            loadChildren: '../pages/categories/categories.module#CategoriesModule'            
        }, {
            path: 'event',
            loadChildren: '../pages/event/event.module#EventModule'            
        }, {
            path: 'logs',
            loadChildren: '../pages/logs/logs.module#LogsModule'            
        }, {
            path: 'tags',
            loadChildren: '../pages/tags/tags.module#TagsModule'            
        }]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'account',
            loadChildren: '../pages/account/account.module#AccountModule'            
        }]
    }
];
