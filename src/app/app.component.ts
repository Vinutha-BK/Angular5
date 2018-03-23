import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-comp',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // public options = {
    //     position: ['bottom', 'left'],
    //     timeOut: 5000,
    //     lastOnBottom: true
    // };

    constructor(private router: Router) {
    }
    ngOnInit() {
        console.log('App init');
    }
  }
