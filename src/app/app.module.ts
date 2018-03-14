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
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './shared/weather.service';

import { FormsModule }   from '@angular/forms';


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
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    FormsModule
  ],
  providers: [DbService, { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
