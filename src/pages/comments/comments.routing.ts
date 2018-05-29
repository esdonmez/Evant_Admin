import { Routes } from '@angular/router';
import { CommentsComponent } from 'pages/comments/comments.component';

export const CommentsRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: CommentsComponent
        }]
    }
];
