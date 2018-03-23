import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    location: string;
    rooms: number;
    constructor(private userSVC: UserService, private router: Router) {
    }
    ngOnInit() {

    }
    searchData(data) {
        console.log(">>>>>",data)
        if ( data.location !== '' &&
            data.fromDate !== '' &&
            data.toDate !== '' &&
            data.noOfRooms >= 1) {
        this.router.navigate(['/hotels']);
    }
    }

}

