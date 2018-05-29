import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'providers/provider.constants';


@Injectable()
export class CommentService {

  private url: string;

  private headers: Headers;
  private options: RequestOptions;

  constructor(public _http: Http) {
    this.url = Configuration.ServerWithApiUrl + 'admin/comments/';

    this.headers = new Headers();    
    this.headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public getAllComments() {
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
}
