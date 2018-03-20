import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../shared/weather.service";
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-weather-landing',
  templateUrl: './weather-landing.component.html',
  styleUrls: ['./weather-landing.component.css']
})
export class WeatherLandingComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public weatherForecastInfo;
  public detailedCountry;
  public countries: any = [];
  public cities: any = [];

  // Model
  public cityModel;
  public countryModel;

  // Lazy-load
  public lazyLoadForcastDetailComponent: boolean = false;
  public lazyLoadCountryComponent: boolean = false;

  ngOnInit() {
    // Get/Bind all countries to dropdown
    this.countries = this._weatherService.getCountries();
  }

  // Filter city as user typein
  filterCities(city: string, country: string = "IN") {
    this.cities = [];
    if (city != '') {
      if (city.length > 1) {
        this._weatherService.getCities()
          .subscribe(data => {
            data.forEach(cty => {
              if (String(cty.country) == country && String(cty.name).toString().toLowerCase().startsWith(city.toLowerCase())) {
                this.cities.push(cty)
              }
            })
          })
      }
    }
  }

  // Set selected city from dropdown to textbox
  setTxt(cty: any) {
    this.cityModel = cty.name;
    this.cities = [];
  }

  // Show/load country conponent
  showCountryInfo(cty: string) {
    this.lazyLoadCountryComponent = true;
  }

  // Show/load weather component
  showWeatherInfo(city: string) {
    //if (city != null && city != undefined && city != "")
    this.lazyLoadForcastDetailComponent = true;
  }
}
