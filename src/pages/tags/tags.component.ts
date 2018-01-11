import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TagModel } from '../../models/TagModel';
import { Subject } from 'rxjs';
import { UtilsService } from 'providers/utils.service';
import { TagService } from 'providers/tag.service';

declare const $: any;

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  providers: [ TagService, UtilsService ]
})
export class TagsComponent implements OnInit, AfterViewInit {
    
  editModal: any = null;
  addModal: any = null;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public tags: TagModel[];
  public tag: TagModel = {id: 0, name: ""};

  constructor(private tagService: TagService, private utilsService: UtilsService) {}

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

      this.tagService.getAllTags()
          .subscribe(res => {
              if(res.isSuccess) {
                  this.tags = res.data;  
                  this.dtTrigger.next(); 
              } else {
                  this.utilsService.showNotification("danger", res.message);
              }  
      });
  }

  ngAfterViewInit() {
  }

  editClick(id) {
      this.tagService.getTag(id)
          .subscribe(res => {
              if(res.isSuccess) {
                  this.tag = res.data;
              } else {
                  this.utilsService.showNotification("danger", res.message);
              }
      });

      this.utilsService.openModal('editModal');
  }

  addClick() {
      this.refreshModel();
      this.utilsService.openModal('addModal');
  }

  removeClick(id) {
      this.tagService.deleteTag(id)
          .subscribe(res => {
              if(res.isSuccess) {
                  this.getAllTags(); 
                  this.utilsService.showNotification("success", res.message);
              } else {
                  this.utilsService.showNotification("danger", res.message);
              }
      });
  }

  getAllTags() {
      this.tagService.getAllTags()
          .subscribe(res => {
              if(res.isSuccess) {
                  this.tags = res.data; 
                  this.dtTrigger.repeat(); 
              } else {
                  this.utilsService.showNotification("danger", res.message);
              }
      });
  }

  editTag() {
      this.tagService.updateTag(this.tag)
          .subscribe(res => {
              if(res.isSuccess) {
                  this.getAllTags();
                  this.utilsService.closeModal('editModal');
                  this.utilsService.showNotification("success", res.message);
              } else {
                  this.utilsService.showNotification("danger", res.message);
              }
      });
  }
  
  addTag() {
      this.tagService.addTag(this.tag)
          .subscribe(res => {
              if(res.isSuccess) {
                  this.getAllTags();
                  this.utilsService.closeModal('addModal');
                  this.utilsService.showNotification("success", res.message);
              } else {
                  this.utilsService.showNotification("danger", res.message);
              }
      });
  }

  refreshModel() {
      this.tag.id = 0;
      this.tag.name = "";
  }
}
