import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'providers/provider.constants';


@Injectable()
export class LogService {

  private url: string;

  private headers: Headers;
  private options: RequestOptions;

  constructor(public _http: Http) {
    this.url = Configuration.ServerWithApiUrl + 'logs/';

    this.headers = new Headers();    
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public getAllLogs() {
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

  public deleteLog(id) {
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
}
