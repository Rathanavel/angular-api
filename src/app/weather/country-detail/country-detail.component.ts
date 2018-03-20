import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';

import { trigger, state, style, animate, transition, keyframes, stagger, query } from "@angular/animations";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
  animations: [
    trigger('countryAnimation', [
      state('move', style({
        transform: 'translateX(-100%)',
      })), transition('* => *', animate('500ms ease')),
      // transition('* => move',
      //   animate('2000ms', keyframes([
      //     style({ transform: 'translateX(0)    rotateY(0)', offset: 0 }),
      //     style({ transform: 'translateX(50%)  rotateY(90deg)', offset: 0.33 }),
      //     style({ transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66 }),
      //     style({ transform: 'translateX(-100%)', offset: 1.0 })
      //   ])
      //   ))
    ])
  ]
})
export class CountryDetailComponent implements OnInit {

  // @Input() countryID: string;
  private _countryID: string;

  public move;

  @Input() public set countryID(val: string) {
    this._countryID = val;
    this.getSelectedCountryDetail(val);
  }

  public detailedCountry: any;

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit() {
    // this.getSelectedCountryDetail(this.countryID);
  }

  // ngOnChanges() {
  //   this.detailedCountry = null
  //   this.getSelectedCountryDetail(this.countryID);
  // }

  // Get country detailed information
  getSelectedCountryDetail(country: string) {
    this.detailedCountry = null;
    this._weatherService.getCountryDetails(country)
      .subscribe(data => {
        this.detailedCountry = data;
      })
  }

}
