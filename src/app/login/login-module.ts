import { NgModule } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { Http } from '@angular/http';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { UserService } from '../services/user.service';
import { SocialLoginComponent } from './social-login/social-login.component';
import { HotelService } from '../services/hotel.service';
import { RouterModule } from '@angular/router';
import { OnStayModule } from '../on-stay/on-stay.module';

const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('317074431593-n2jf2f2j6kmgvctglp7hita05q8nvdgn.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2030976587146514')
    }
  ]);
  export function provideConfig() {
    return config;
  }
@NgModule({
    declarations: [

    ],
    imports: [
        SocialLoginModule,
        OnStayModule
    ],
    providers: [UserService, HotelService,
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
          },
          Adal4Service,
          {
              provide: Adal4HTTPService,
              useFactory: Adal4HTTPService.factory,
              deps: [Http, Adal4Service]
          },
          HotelService,
        ],
          // exports: [SocialLoginComponent]
  })
  export class LoginModule { }
