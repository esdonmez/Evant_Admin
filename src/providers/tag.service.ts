import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'providers/provider.constants';


@Injectable()
export class TagService {

  private url: string;

  private headers: Headers;
  private options: RequestOptions;

  constructor(public _http: Http) {
    this.url = Configuration.ServerWithApiUrl + 'tags/';
    
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    
    this.options = new RequestOptions({ headers: this.headers });
  }

  public getAllTags() {
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

  public getTag(id) {
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

  public addTag(tag) {
    let body = {
      name: tag.name
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

  public deleteTag(id) {
    return Observable.create(observer => {
      this._http.delete(this.url + id, this.options).map(res => res.json()).subscribe(
        data=>{
          observer.next(data);
          observer.complete();
        },
        err=> console.log(err) 
      );
    });
  }

  public updateTag(tag) {
    
    return Observable.create(observer => {
      this._http.put(this.url, JSON.stringify(tag), this.options).map(res => res.json()).subscribe(
        data=>{
          observer.next(data);
          observer.complete();
        },
        err=> console.log(err) 
      );
    });
  }
}
