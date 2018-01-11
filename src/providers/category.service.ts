import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'providers/provider.constants';


@Injectable()
export class CategoryService {

  private url: string;

  private headers: Headers;
  private options: RequestOptions;

  private headersDelete: Headers;
  private optionsDelete: RequestOptions;

  constructor(public _http: Http) {
    this.url = Configuration.ServerWithApiUrl + 'categories/';
    
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.headersDelete = new Headers();    
    this.headersDelete.append('Content-Type', 'application/x-www-form-urlencoded');
    
    this.options = new RequestOptions({ headers: this.headers });

    this.optionsDelete = new RequestOptions({ headers: this.headersDelete });
  }

  public getAllCategories() {
    return Observable.create(observer => {
      this._http.get(this.url).map(res => res.json()).subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          err => console.log(err)          
        );
    });
  }

  public getCategory(id) {
    return Observable.create(observer => {
      this._http.get(this.url + id).map(res => res.json()).subscribe(
        data=>{
          observer.next(data);
          observer.complete();
        },
        err=> console.log(err)  
      );
    });
  }

  public addCategory(category) {
    let body = {
      name: category.name,
      icon: category.icon
    };

    return Observable.create(observer => {
      this._http.post(this.url, JSON.stringify(body), this.options).map(res => res.json()).subscribe(
        data=>{
          observer.next(data);
          observer.complete();
        },
        err=> console.log(err) 
      );
    });
  }

  public deleteCategory(id) {
    return Observable.create(observer => {
      this._http.delete(this.url + id, this.optionsDelete).map(res => res.json()).subscribe(
        data=>{
          observer.next(data);
          observer.complete();
        },
        err=> console.log(err) 
      );
    });
  }

  public updateCategory(category) {
    
    return Observable.create(observer => {
      this._http.put(this.url, JSON.stringify(category), this.options).map(res => res.json()).subscribe(
        data=>{
          observer.next(data);
          observer.complete();
        },
        err=> console.log(err) 
      );
    });
  }
}
