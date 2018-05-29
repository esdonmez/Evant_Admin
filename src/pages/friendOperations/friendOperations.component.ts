import { Component, OnInit } from '@angular/core';
import { FriendOperationModel } from '../../models/FriendOperationModel';
import { Subject } from 'rxjs';
import { AdminService } from 'providers/admin.service';
import { UtilsService } from 'providers/utils.service';

declare const $: any;

@Component({
  selector: 'app-logs',
  templateUrl: './friendOperations.component.html',
  providers: [ AdminService, UtilsService ]
})
export class FriendOperationsComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public friendOperations: FriendOperationModel[];

  constructor(private adminService: AdminService, private utilsService: UtilsService) { }

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

    this.adminService.getAllFriendOpeartions()
      .subscribe(res => {
          console.log(res.data)
          if(res.isSuccess) {
              this.friendOperations = res.data;  
              this.dtTrigger.next(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }  
      });
  }
}
