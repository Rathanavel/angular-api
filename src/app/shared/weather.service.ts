import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  public slowUrl = 'http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/posts/1';
  public _urlOnline: string = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="nome, ak")&format=json&env=store://datatables.org/alltableswithkeys';

  public _urlWeatherQueryOnline: string = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="nome, {0}")&format=json&env=store://datatables.org/alltableswithkeys';

  public getDefaultWeatherData() {
    return this.http.get(this._urlOnline)
  }

  public getOnDemandWeatherData(city: string) {
    return this.http.get(this._urlWeatherQueryOnline.replace('{0}', city))
  }

}
