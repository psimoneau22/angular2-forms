import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class FormService {

    private baseUrl: string = 'http://localhost:3200';

    constructor(private http: Http){}

    submitForm(employee: Employee): Observable<any> {
        return this.http.post(
            `{this.baseUrl}/employees`,
            JSON.stringify(employee),
            new RequestOptions({ headers: 
                new Headers({'Content-Type': 'application/json'})
            }))
        .map(res => res.json().fields || {})   
        .catch(this.handleError)
    }

    getLanguages(){
        return this.http.get(`${this.baseUrl}/languages`)
            .map(r => r.json())
            .catch(this.handleError)
    }

    handleError = err => Observable.throw(err.statusText)
}