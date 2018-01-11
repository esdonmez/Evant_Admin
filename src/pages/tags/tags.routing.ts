import { Routes } from '@angular/router';

import { TagsComponent } from 'pages/tags/tags.component';

export const TagRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: TagsComponent
        }]
    }
];
