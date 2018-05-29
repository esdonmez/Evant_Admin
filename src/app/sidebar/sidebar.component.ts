import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { AccountService } from 'providers/account.service';
import { UtilsService } from 'providers/utils.service';
import { Router } from '@angular/router';

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

export const ROUTES: RouteInfo[] = [
    {
        path: '/logs',
        title: 'Logs',
        type: 'link',
        icontype: 'laptop_mac'
    },{
        path: '/users',
        title: 'Users',
        type: 'link',
        icontype: 'face'
    },{
        path: '/friendOperations',
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
            {path: 'eventOperations', title: 'Event Operations', ab: 'EO'},
        ]
    },{
        path: '/categories',
        title: 'Categories',
        type: 'link',
        icontype: 'apps'
    },{
        path: '/comments',
        title: 'Comments',
        type: 'link',
        icontype: 'comment'
    },{
        path: '/searchHistories',
        title: 'Search Histories',
        type: 'link',
        icontype: 'youtube_searched_for'
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    providers: [AccountService, UtilsService]
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public name: string = "user";
    public userPhoto: string = "";
    
    constructor(private accountService: AccountService, private utilsService: UtilsService, private router: Router) {
        this.getMe();
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    getMe() {
        this.accountService.getMe()
            .subscribe(res => {
                if(res.isSuccess) {
                    this.name = res.data.firstName + " " + res.data.lastName;
                    this.userPhoto = res.data.photoUrl;
                } else {
                    this.utilsService.showNotification("danger", res.message);
                }  
        });
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(["/account"]);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
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
