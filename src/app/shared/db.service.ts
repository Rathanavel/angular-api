import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { IEmployee } from "../employee-list/IEmployee";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DbService {

  constructor(private http: HttpClient) { }

  public getEmployees1() {
    return [{ "id": 1, "name": "Rathanavel", "age": 28 },
    { "id": 2, "name": "Rathanavel2", "age": 18 },
    { "id": 3, "name": "Rathanavel3", "age": 38 },
    { "id": 4, "name": "Rathanavel4", "age": 68 },
    { "id": 5, "name": "Rathanavel5", "age": 58 }]
  }

  public _urlOnline: string = 'https://query.yahooapis.com/v1/public/yql?qselect * from weather.forecast where woeid in (select woeid from geo.places(1) where text="nome, ak")&format=json&env=store://datatables.org/alltableswithkeys';

  public getOnlineEmployees() {
    //return this.http.get(this._url);

    return this.http.get<IEmployee[]>(this._urlOnline);
  }

  public _urlJson: string = "./assets/data/employees.json";

  public getOfflineEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlJson)
      .catch(this.errorHandler)

  }

  public errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Random server error");
  }

  public slowUrl ='http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/posts/1';
  public getSlowData() {
    return this.http.get(this._urlOnline)
  }

}

// Weather url
// https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="nome, ak")&format=json&env=store://datatables.org/alltableswithkeys
