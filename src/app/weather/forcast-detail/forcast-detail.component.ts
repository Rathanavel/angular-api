import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';

import { setForcastEvents } from "./forcast-action.js";
import { trigger, state, style, animate, transition, keyframes, stagger, query, } from "@angular/animations";


@Component({
  selector: 'app-forcast-detail',
  templateUrl: './forcast-detail.component.html',
  styleUrls: ['./forcast-detail.component.css'],
  animations: [
    trigger('forcastAnimation', [
      transition('* => *', [
        query('.element-card ', style({ transform: 'translateX(-100%)' })),
        query('.element-card ', stagger('50ms', [
          animate('550ms', style({ transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class ForcastDetailComponent implements OnInit {

  @Input() countryID: string;
  @Input() cityID: string;

  constructor(private _weatherService: WeatherService) { }

  public forcastDetails: any;

  ngOnInit() {

    this._weatherService.getMockForcastDetail("", "")
      .subscribe(data => {
        this.forcastDetails = data;
        console.log(this.forcastDetails)
        this.assignEvent();
      })
  }

  ngOnChange() {
    // this._weatherService.getMockForcastDetail("", "")
    //   .subscribe(data => {
    //     this.forcastDetails = data;
    //     this.assignEvent();
    //   })
  }

  // Get weather forcast during button/textbox enter
  getWetherInfo() {
    //alert(countries + city)
    this._weatherService.getOnDemandWeatherData(this.cityID, this.countryID)
      .subscribe(data => {
        console.log(data);
        this.forcastDetails = JSON.stringify(data);
      })
  }

  assignEvent() {
    setForcastEvents();
  }

}
