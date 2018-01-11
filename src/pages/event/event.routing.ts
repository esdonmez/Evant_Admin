import { Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './eventdetail/eventdetail.component';

export const EventRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'events',
            component: EventsComponent
        }]
    }, {
        path: '',
        children: [ {
            path: 'eventdetail',
            component: EventDetailComponent
        }]
    }
];
