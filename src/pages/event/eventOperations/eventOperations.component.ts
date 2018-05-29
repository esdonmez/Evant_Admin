import { Component, OnInit } from '@angular/core';
import { EventOperationModel } from '../../../models/EventOperationModel';
import { Subject } from 'rxjs';
import { AdminService } from 'providers/admin.service';
import { UtilsService } from 'providers/utils.service';

declare const $: any;

@Component({
  selector: 'app-logs',
  templateUrl: './eventOperations.component.html',
  providers: [ AdminService, UtilsService ]
})
export class EventOperationsComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public eventOperations: EventOperationModel[];

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

    this.adminService.getAllEventOperations()
      .subscribe(res => {
          console.log(res.data)
          if(res.isSuccess) {
              this.eventOperations = res.data;  
              this.dtTrigger.next(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }  
      });
  }
}
