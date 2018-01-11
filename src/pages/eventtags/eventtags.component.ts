import { Component, OnInit } from '@angular/core';
import { EventTagService } from 'providers/eventtag.service';
import { UtilsService } from 'providers/utils.service';
import { Subject } from 'rxjs';
import { EventTagModel } from 'models/EventTagModel';

@Component({
  selector: 'app-eventtags',
  templateUrl: './eventtags.component.html'
})
export class EventTagsComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public eventTags: EventTagModel[];

  constructor(private eventTagService: EventTagService, private utilsService: UtilsService) { }

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

    this.eventTagService.getAllEventTags()
      .subscribe(res => {
          if(res.isSuccess) {
              this.eventTags = res.data;  
              this.dtTrigger.next(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }  
      });
  }

  removeClick(id) {
    this.eventTagService.deleteEventTag(id)
        .subscribe(res => {
          if(res.isSuccess) {
              this.getAllEventTags(); 
              this.utilsService.showNotification("success", res.message);
          } else {
              this.utilsService.showNotification("danger", res.message);
          }
    });
  }

  getAllEventTags() {
    this.eventTagService.getAllEventTags()
        .subscribe(res => {
          if(res.isSuccess) {
              this.eventTags = res.data; 
              this.dtTrigger.repeat(); 
          } else {
              this.utilsService.showNotification("danger", res.message);
          }
    });
  }
}
