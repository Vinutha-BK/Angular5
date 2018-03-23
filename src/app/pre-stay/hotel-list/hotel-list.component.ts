import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
  } from '@angular/animations';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Hotel } from '../../shared/data-model/hotel';
import { HotelService } from '../../services/hotel.service';
import { UserService } from '../../services/user.service';
import { SnackBarComponent } from '../../shared/components/snack-bar/snack-bar.component';

@Component({
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css'],
    animations: [
        trigger('listAnimation', [
          transition('* => *', [
            query('img', style({ transform: 'translateX(-100%)'})),
            query('img',
              stagger('600ms', [
                animate('900ms', style({ transform: 'translateX(0)'}))
            ]))
          ])
        ])
      ]
})
export class HotelListComponent implements OnInit {
    errorMessage: string;
    location: string;
    rooms: number;
    hotels: Hotel[];
    pendingRequest;
    hotelsData: Array<Object> = [];
    listDivClass = 'listContainer';
    iconClass = 'icon';
    animation = '';
    hotelLength = 0;
    constructor( private hotelService: HotelService, private userSVC: UserService,
         private router: Router, private snackBar: MatSnackBar) {
        this.hotelService.hotelId = -1;
    }


    ngOnInit(): void {
        this.location = this.hotelService.searchData.location;
        console.log('List init');
        this.hotelService.getHotels()
            .subscribe(hotels => {
                this.hotels = hotels;
                console.log('list');
                this.hotelLength = this.hotels.length;
                this.setAnimation();
            }
                ,
            error => this.errorMessage = <any>error);
    }
    setHotelId(id, name) {
        this.hotelService.hotelId = id;
        this.openSnackBar(name);
    }
    openSnackBar(name) {
        this.hotelService.snackBarData = 'Thank you for choosing us:  ' + name.toUpperCase();
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
        });
    }
    searchData(data) {
        this.animation = '';
        this.location = this.hotelService.searchData.location;
        this.rooms = this.hotelService.searchData.noOfRooms;
        this.setAnimation();
    }
    setAnimation() {
        console.log('animation');
        setTimeout(() => {
            this.animation = 'listContainerAnimation';
        }, 500);
    }
}
