import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { Booked } from '../../shared/data-model/hotel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-stay-service',
  templateUrl: './stay-service.component.html',
  styleUrls: ['./stay-service.component.css']
})
export class StayServiceComponent implements OnInit {
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
  service() {
    this.hotelService.dueAmount = 4000;
    this.hotelService.paid = false;
  }
}
