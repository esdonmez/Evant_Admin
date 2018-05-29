import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Configuration } from 'providers/provider.constants';


@Injectable()
export class AdminService {

    private url: string;

    private headers: Headers;
    private options: RequestOptions;

    constructor(public _http: Http) {
        this.url = Configuration.ServerWithApiUrl + 'admin/';

        this.headers = new Headers();    
        this.headers.append('Content-Type', 'application/json');

        this.options = new RequestOptions({ headers: this.headers });
    }

    public getAllComments() {
        return Observable.create(observer => {
            this._http.get(this.url + "comments").map(res => res.json()).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => console.log(err)          
            );
        });
    }

    public getAllUsers() {
        return Observable.create(observer => {
            this._http.get(this.url + "users").map(res => res.json()).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => console.log(err)          
            );
        });
    }

    public getAllEvents() {
        return Observable.create(observer => {
            this._http.get(this.url + "events").map(res => res.json()).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => console.log(err)          
            );
        });
    }

    public getAllSearchHistories() {
        return Observable.create(observer => {
            this._http.get(this.url + "searches").map(res => res.json()).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => console.log(err)          
            );
        });
    }

    public getAllFriendOpeartions() {
        return Observable.create(observer => {
            this._http.get(this.url + "friendoperations").map(res => res.json()).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => console.log(err)          
            );
        });
    }

    public getAllEventOperations() {
        return Observable.create(observer => {
            this._http.get(this.url + "eventoperations").map(res => res.json()).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => console.log(err)          
            );
        });
    }
}
