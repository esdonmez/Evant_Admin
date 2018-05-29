import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AdminService } from 'providers/admin.service';
import { UserModel } from '../../models/UserModel';
import { Subject } from 'rxjs';
import { UtilsService } from 'providers/utils.service';

declare const $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [ AdminService, UtilsService ]
})
export class UsersComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public users: UserModel[];

  constructor(private adminService: AdminService, private utilsService: UtilsService) {}

  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']],
        language: {
            search: '_INPUT_',
            searchPlaceholder: 'Search'
        },
        responsive: true
    };

    this.adminService.getAllUsers()
        .subscribe(res => {
          console.log(res.data)
            if(res.isSuccess) {
                this.users = res.data;  
                this.dtTrigger.next(); 
            } else {
                this.utilsService.showNotification("danger", res.message);
            }  
    });
  }
}
