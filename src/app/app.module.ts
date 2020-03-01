import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services
import { RequestService } from "./services/request.service";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MembersComponent } from './pages/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricingComponent,
    FooterComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
