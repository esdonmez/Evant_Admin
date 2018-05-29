import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'providers/provider.constants';
import { isEmpty } from 'rxjs/operator/isEmpty';


@Injectable()
export class AccountService {

  private url: string;

  private headers: Headers;
  private headersToken: Headers;
  private options: RequestOptions;
  private optionsToken: RequestOptions;

  constructor(public _http: Http) {
    this.url = Configuration.ServerWithApiUrl + 'account/';
    
    this.headers = new Headers();
    this.headersToken = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headersToken.append('Authorization', "Bearer " +  sessionStorage.getItem('token'));
    
    this.options = new RequestOptions({ headers: this.headers });
    this.optionsToken = new RequestOptions({ headers: this.headersToken });
  }

  public login(loginCredentials) {
    let body = {
        email: loginCredentials.email,
        password: loginCredentials.password,
    };
    
    return Observable.create(observer => {
      this._http.post(this.url + "token", body, this.options).map(res => res.json()).subscribe(
          data => {
            observer.next(data);
            observer.complete();
          }, err => console.log(err)        
        );
    });
  }

  public forgetPassword(id) {

  }

  public getMe() {
    return Observable.create(observer => {
      this._http.get(this.url + "me", this.optionsToken).map(res => res.json()).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        }, err => console.log(err)
      );
    });
  }
}
