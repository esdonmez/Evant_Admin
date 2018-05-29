import { Routes } from '@angular/router';
import { FriendOperationsComponent } from 'pages/friendOperations/friendOperations.component';

export const FriendOperationsRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: FriendOperationsComponent
        }]
    }
];
