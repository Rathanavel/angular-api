import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLoginComponent } from './social-login/social-login.component';


@NgModule({
  declarations: [
    AppComponent,
    QuickLinksComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
