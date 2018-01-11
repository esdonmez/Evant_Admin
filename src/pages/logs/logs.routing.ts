import { Routes } from '@angular/router';
import { LogsComponent } from 'pages/logs/logs.component';

export const LogRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: LogsComponent
        }]
    }
];
