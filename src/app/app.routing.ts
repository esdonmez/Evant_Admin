import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AuthGuard } from './authguard';
import { Injectable } from '@angular/core';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard] 
        }, {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [{
            path: '',
            loadChildren: '../pages/logs/logs.module#LogsModule'
        }, {
            path: 'categories',
            loadChildren: '../pages/categories/categories.module#CategoriesModule'            
        }, {
            path: 'event',
            loadChildren: '../pages/event/event.module#EventModule'            
        }, {
            path: 'users',
            loadChildren: '../pages/users/users.module#UsersModule'            
        }, {
            path: 'comments',
            loadChildren: '../pages/comments/comments.module#CommentsModule'            
        }, {
            path: 'friendOperations',
            loadChildren: '../pages/friendOperations/friendOperations.module#FriendOperationsModule'            
        }, {
            path: 'searchHistories',
            loadChildren: '../pages/searchHistories/searchHistories.module#SearchHistoriesModule'            
        }, {
            path: 'logs',
            loadChildren: '../pages/logs/logs.module#LogsModule'            
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
