import { Component, OnInit } from '@angular/core';
import { Booked } from '../../shared/data-model/hotel';
import { HotelService } from '../../services/hotel.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  hotel: Booked;
  constructor(public hotelService: HotelService, public userService: UserService ) {

   }

  ngOnInit() {
      const username = this.userService.loggedInUserName.split('@', 1);
      this.hotelService.getBookedRoom(username[0]).subscribe(
        hotel => {
          this.hotel = hotel[0];
         
        }
      );
    }
    checkin(status) {
      this.hotel.checkInStatus = status;
      this.hotelService.updateBooking(this.hotel)
      .subscribe(hotel => {
        console.log('updated', hotel);
      });
    }
}
