import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public weatherInfo;

  ngOnInit() {
    this._weatherService.getDefaultWeatherData()
      .subscribe(data => {
        this.weatherInfo = JSON.stringify(data)
        console.log(data)
      })
  }

  getWetherInfo(city: string) {
    //  alert('hello ' + city)
    this._weatherService.getOnDemandWeatherData(city)
      .subscribe(data => {
        console.log(data);
        this.weatherInfo = JSON.stringify(data);
      })
  }

}
