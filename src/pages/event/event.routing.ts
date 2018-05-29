import { Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { EventOperationsComponent } from './eventOperations/eventOperations.component';

export const EventRoutes: Routes = [
    {
        path: '',
        children: [ {
            path: 'events',
            component: EventsComponent
        }]
    },
    {
        path: '',
        children: [ {
            path: 'eventOperations',
            component: EventOperationsComponent
        }]
    }
];
