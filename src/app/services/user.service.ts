import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { AzureConfigService } from './azure.config.service';
import { Adal4Service } from 'adal-angular4';
import { ActivatedRoute } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class UserService {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    loggedInUserName: string;
    authUser: any;
    admin: boolean;
    socialLog;
    users: any[];
    user: SocialUser;
    isAuthenticated: boolean =  false;

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private adalSvc: Adal4Service) {
    }

    getAdminStatus() {
        return this.admin;
    }
    getLoginStatus() {
        return this.userLoggedIn;
    }

    signInWithGoogle(): void {
      debugger;
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }
    signInWithAzure(): void {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
           if (this.adalSvc.userInfo.authenticated) {
             this.router.navigate([returnUrl]);
           } else {
             this.adalSvc.login();
             console.log('authenticated', this.adalSvc.userInfo.authenticated)
           }
      }
    signOut(): void {
        this.authService.signOut();
        this.adalSvc.handleWindowCallback();
        
        this.isAuthenticated = this.adalSvc.userInfo.authenticated;
        if (this.isAuthenticated) {
            this.adalSvc.logOut();
          }
        this.userLoggedIn = false;
        this.router.navigate(['home']);
      }
}
