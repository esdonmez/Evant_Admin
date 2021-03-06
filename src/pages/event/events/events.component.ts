import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../../models/EventModel';
import { Subject } from 'rxjs';
import { AdminService } from 'providers/admin.service';
import { UtilsService } from 'providers/utils.service';

declare const $: any;

@Component({
  selector: 'app-logs',
  templateUrl: './events.component.html',
  providers: [ AdminService, UtilsService ]
})
export class EventsComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public events: EventModel[];

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

    this.adminService.getAllEvents()
      .subscribe(res => {
          console.log(res.data)
          if(res.isSuccess) {
              this.events = res.data;  
              this.dtTrigger.next(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }  
      });
  }
}
