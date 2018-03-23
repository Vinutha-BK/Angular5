import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { NavBarModule } from './shared/components/nav-bar/nav-bar-module';
import { CommonModule } from '@angular/common';
import { SearchBarModule } from './shared/components/search-bar/search-bar.module';
import { HttpClientModule } from '@angular/common/http';
import { PreStayModule } from './pre-stay/pre-stay.module';
// import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],

    CommonModule,
    HttpClientModule,
    SearchBarModule,
    PreStayModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'home', component: WelcomeComponent }]),
      NavBarModule,
      // SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
