import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(public hotelSVC: HotelService) { }

  ngOnInit() {
  }

}
