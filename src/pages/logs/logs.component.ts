import { Component, OnInit } from '@angular/core';
import { LogModel } from '../../models/LogModel';
import { Subject } from 'rxjs';
import { LogService } from 'providers/log.service';
import { UtilsService } from 'providers/utils.service';

declare const $: any;

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  providers: [ LogService, UtilsService ]
})
export class LogsComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public logs: LogModel[];

  constructor(private logService: LogService, private utilsService: UtilsService) { }

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

    this.logService.getAllLogs()
      .subscribe(res => {
          console.log(res.data)
          if(res.isSuccess) {
              this.logs = res.data;  
              this.dtTrigger.next(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }  
      });
  }

  removeClick(id) {
    this.logService.deleteLog(id)
        .subscribe(res => {
          if(res.isSuccess) {
              this.getAllLogs(); 
              this.utilsService.showNotification("success", res.message);
          } else {
              this.utilsService.showNotification("danger", res.message);
          }
    });
  }

  getAllLogs() {
    this.logService.getAllLogs()
        .subscribe(res => {
          if(res.isSuccess) {
              this.logs = res.data; 
              this.dtTrigger.repeat(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }
    });
  }
}
