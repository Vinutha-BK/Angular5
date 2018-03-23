import { NgModule } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginModule } from '../../../login/login-module';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SocialLoginComponent } from '../../../login/social-login/social-login.component';

@NgModule({
    declarations: [
        NavBarComponent,
        SocialLoginComponent
    ],
    imports: [LoginModule,
        RouterModule, CommonModule,
        RouterModule.forChild([
            { path: 'login', component: SocialLoginComponent, pathMatch: 'full' },

]),
    ],
    providers: [UserService],
    exports: [NavBarComponent]
  })
  export class NavBarModule { }
