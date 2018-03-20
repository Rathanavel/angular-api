import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

// Custom Imports
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from "./app-routing.module";


import { AppComponent } from './app.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DbService } from './shared/db.service';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
// import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './shared/weather.service';

import { FormsModule } from '@angular/forms';
import { WeatherLandingComponent } from './weather/weather-landing/weather-landing.component';
import { CountryDetailComponent } from './weather/country-detail/country-detail.component';
import { ForcastDetailComponent } from './weather/forcast-detail/forcast-detail.component';
// import { WeatherLazyModule } from "./weather/weather-landing/weather-lazy.module";

// Material imports//animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatCheckboxModule, MatCardModule, MatButtonModule, MatGridListModule, MatTabsModule, MatIconModule, MatTooltipModule } from "@angular/material";
import { CdkTableModule } from '@angular/cdk/table';
import { Ng5TopnavComponent } from './ng5-material/ng5-topnav/ng5-topnav.component';
import { Ng5LandingComponent } from './ng5-material/ng5-landing/ng5-landing.component';
import { Ng5EmployeesComponent } from './ng5-material/ng5-employees/ng5-employees.component';
import { Ng5WeatherComponent } from './ng5-material/ng5-weather/ng5-weather.component';
import { Ng5CountriesComponent } from './ng5-material/countries/ng5-countries/ng5-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickLinksComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
    SocialLoginComponent,
    routingComponents,
    HomeComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    // WeatherLazyModule,
    // WeatherListComponent,
    CountryDetailComponent,
    ForcastDetailComponent,
    WeatherLandingComponent,
    Ng5LandingComponent,
    Ng5EmployeesComponent,
    Ng5WeatherComponent,
    Ng5TopnavComponent,
    Ng5CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule, MatCardModule, MatButtonModule, MatGridListModule, MatTabsModule, MatIconModule, MatTooltipModule,
    CdkTableModule
  ],
  providers: [DbService, { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
