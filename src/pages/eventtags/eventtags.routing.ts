import { Routes } from '@angular/router';
import { EventTagsComponent } from 'pages/eventtags/eventtags.component';

export const EventTagRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: EventTagsComponent
        }]
    }
];
