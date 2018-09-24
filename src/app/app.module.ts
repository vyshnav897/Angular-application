import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { ListModule } from "./list/list.module";
import { LoginModule } from "./login/login.module";
import { DetailModule } from "./detail/detail.module";

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from "./auth-gaurd.service";
import { AppService } from "./app.service";
import { CustomCurrencyPipe } from "./list/currencyglobal.pipe";
import { AppResolver } from './app-resolver.service';
import { AuthService } from "./auth.service";
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ListModule,
    LoginModule,
    DetailModule,
    HeaderModule
  ],
  providers: [AuthGuard, AuthService, AppService, { provide: LOCALE_ID, useValue: 'en-GB' }, CurrencyPipe, AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
