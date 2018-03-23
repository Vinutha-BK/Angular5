import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { UserService } from '../../services/user.service';
import { Booked } from '../../shared/data-model/hotel';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  hotel: Booked;

  constructor(public hotelService: HotelService, public userService: UserService) { }

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
      console.log('Checked out', hotel);
    });
  }
  payment() {
    this.hotelService.dueAmount = 0;
    this.hotelService.paid = true;
  }
  feedback(txt) {
    console.log(txt);
    this.hotelService.noBooking = true;
  }


}
