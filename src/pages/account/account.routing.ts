import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forgetpassword/forgetpassword.component';

export const AccountRoutes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },{
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }]
    }, {
        path: '',
        children: [ {
            path: 'forget',
            component: ForgetPasswordComponent
        }]
    }
];
