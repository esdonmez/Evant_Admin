import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'providers/category.service';
import { CategoryModel } from '../../models/CategoryModel';
import { Subject } from 'rxjs';
import { UtilsService } from 'providers/utils.service';

declare const $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [ CategoryService, UtilsService ]
})
export class CategoriesComponent implements OnInit, AfterViewInit {
    
    editModal: any = null;
    addModal: any = null;
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();
    public categories: CategoryModel[];
    public category: CategoryModel = {id: 0, name: "", icon: ""};

    constructor(private categoryService: CategoryService, private utilsService: UtilsService) {}

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

        this.categoryService.getAllCategories()
            .subscribe(res => {
                if(res.isSuccess) {
                    this.categories = res.data;  
                    this.dtTrigger.next(); 
                } else {
                    this.utilsService.showNotification("danger", res.message);
                }  
        });
    }

    ngAfterViewInit() {
    }

    editClick(id) {
        this.categoryService.getCategory(id)
            .subscribe(res => {
                if(res.isSuccess) {
                    this.category = res.data;
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
        this.categoryService.deleteCategory(id)
            .subscribe(res => {
                if(res.isSuccess) {
                    this.getAllCategories(); 
                    this.utilsService.showNotification("success", res.message);
                } else {
                    this.utilsService.showNotification("danger", res.message);
                }
        });
    }

    getAllCategories() {
        this.categoryService.getAllCategories()
            .subscribe(res => {
                if(res.isSuccess) {
                    this.categories = res.data; 
                    this.dtTrigger.repeat(); 
                } else {
                    this.utilsService.showNotification("danger", res.message);
                }
        });
    }

    editCategory() {
        this.categoryService.updateCategory(this.category)
            .subscribe(res => {
                if(res.isSuccess) {
                    this.getAllCategories();
                    this.utilsService.closeModal('editModal');
                    this.utilsService.showNotification("success", res.message);
                } else {
                    this.utilsService.showNotification("danger", res.message);
                }
        });
    }
    
    addCategory() {
        this.categoryService.addCategory(this.category)
            .subscribe(res => {
                if(res.isSuccess) {
                    this.getAllCategories();
                    this.utilsService.closeModal('addModal');
                    this.utilsService.showNotification("success", res.message);
                } else {
                    this.utilsService.showNotification("danger", res.message);
                }
        });
    }

    refreshModel() {
        this.category.id = 0;
        this.category.icon = "";
        this.category.name = "";
    }
}
