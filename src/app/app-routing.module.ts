import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherLandingComponent } from "./weather/weather-landing/weather-landing.component";
import { Ng5LandingComponent } from './ng5-material/ng5-landing/ng5-landing.component';
import { LoginLandingComponent } from './material-login/login-landing/login-landing.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginLandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: Ng5LandingComponent },
    { path: 'weather', component: WeatherLandingComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    HomeComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    WeatherLandingComponent,
    Ng5LandingComponent,
    LoginLandingComponent
]