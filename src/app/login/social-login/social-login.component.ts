import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';
import { Adal4Service } from 'adal-angular4';
import { environment } from '../../../environments/environment';
import { SocialUser } from 'angular4-social-login';
import { UserService } from '../../services/user.service';
import { HotelService } from '../../services/hotel.service';
import { constants } from '../../shared/utility/constants';

@Component({
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
  email: string;
  password1: string;
  user: SocialUser;


  constructor(private route: ActivatedRoute, public userSVC: UserService,
    private router: Router, private authService: AuthService, private adalSvc: Adal4Service,
    private hotelService: HotelService) {
    this.adalSvc.init(constants.adalConfig);
  }

  ngOnInit() {
    this.userSVC.userLoggedIn = true;
    if (this.adalSvc.userInfo.authenticated) {
      this.userSVC.loggedInUserName = this.adalSvc.userInfo.username;
      this.navigateToPage();
    }
    this.adalSvc.handleWindowCallback();
    this.authService.authState.subscribe((user) => {
      debugger;
      if (!this.adalSvc.userInfo.authenticated) {
      if (user != null) {
        this.userSVC.user = user;
        this.userSVC.loggedInUserName = user.email;

        this.navigateToPage();
      }
    } else {
      this.userSVC.userLoggedIn = true;
    }
    });
  }
  navigateToPage() {
    debugger;
    console.log('>>>>this.hotelService.hotelId', this.hotelService.hotelId);
    this.userSVC.userLoggedIn = true;
    const str = this.userSVC.loggedInUserName.split('@', 2);
    if (str[1] === 'mindtree.com') {
      this.userSVC.admin = true;
    }
  if (this.hotelService.hotelId >= 1) {
    this.router.navigate(['/booking', this.hotelService.hotelId]);
  } else {
    this.router.navigate(['/home']);
  }
}
  cancel() {
    this.router.navigate(['']);
  }
}
