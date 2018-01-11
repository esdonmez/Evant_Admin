import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/#',
        title: 'Users',
        type: 'link',
        icontype: 'face'
    },{
        path: '/#',
        title: 'Friend Operations',
        type: 'link',
        icontype: 'wc'
    },{
        path: '/event',
        title: 'Event',
        type: 'sub',
        icontype: 'event_available',
        collapse: 'event',
        children: [
            {path: 'events', title: 'Events', ab: 'E'},
            {path: 'eventdetail', title: 'Event Details', ab: 'ED'},
            {path: '#', title: 'Event Operations', ab: 'EO'},
            {path: '#', title: 'Event Tags', ab: 'ET'}
        ]
    },{
        path: '/categories',
        title: 'Categories',
        type: 'link',
        icontype: 'apps'
    },{
        path: '/#',
        title: 'Addresses',
        type: 'link',
        icontype: 'store'
    },{
        path: '/#',
        title: 'Comments',
        type: 'link',
        icontype: 'comment'
    },{
        path: '/#',
        title: 'Notifications',
        type: 'link',
        icontype: 'notifications'
    },{
        path: '/#',
        title: 'Report',
        type: 'sub',
        icontype: 'find_in_page',
        collapse: 'report',
        children: [
            {path: '#', title: 'User Reports', ab: 'UR'},
            {path: '#', title: 'Report Types', ab: 'RT'}
        ]
    },{
        path: '/#',
        title: 'Search Histories',
        type: 'link',
        icontype: 'youtube_searched_for'
    },{
        path: '/#',
        title: 'User Devices',
        type: 'link',
        icontype: 'devices'
    },{
        path: '/tags',
        title: 'Tags',
        type: 'link',
        icontype: 'loyalty'
    },{
        path: '/logs',
        title: 'Logs',
        type: 'link',
        icontype: 'laptop_mac'
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
