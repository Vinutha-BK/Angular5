import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Hotel, Booked, CardDetails } from '../../shared/data-model/hotel';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { SnackBarComponent } from '../../shared/components/snack-bar/snack-bar.component';
import { SearchService } from '../../shared/components/search-bar/search-service';
import {SwPush, SwUpdate} from '@angular/service-worker';
import { NewsletterService } from '../../services/newletter.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']

})
export class BookRoomComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY = 'BL99yHcgb8LFNXOeWAfvT9dUKti6yaR_OwqgFZzZbiJ2xYxxVMDKLpb163if7RuqT_wVFECenUPylCFKV6AFvQw';
  hotel: Hotel;
  rooms: number;
  private sub: Subscription;
  booked: Booked;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  selectedValue: number;
  toDateMin: Date;
  myQrCodeId: string;
  private validationMessages: { [key: string]: { [key: string]: string } };
  month = [];
  year = [];

  roomType = [
    {value: 5000, viewValue: 'A/C Delux - INR.5000'},
    {value: 10000, viewValue: 'A/C Super Delux - INR.10000'},
    {value: 15000, viewValue: 'Luxury Deluxe Room'}
  ];

  paymentType = [
    'Visa Credit / Debit Card', 'Mastercard Credit / Debit Card'];

  @ViewChild('fromDate') fromDate: ElementRef;
  @ViewChild('toDate') toDate: ElementRef;
  constructor(public userSVC: UserService, public route: ActivatedRoute, public router: Router,
    public hotelService: HotelService, public dialog: MatDialog, public snackBar: MatSnackBar, public searchSVC: SearchService,
    public _formBuilder: FormBuilder, public swPush: SwPush,
    public newsletterService: NewsletterService) {
      this.booked = new Booked();
      this.selectedValue = 5000;
    }

  ngOnInit() {
    this.month = this.hotelService.getMonth();
    this.year = this.hotelService.getYear();
    if (!this.userSVC.userLoggedIn) {
      this.router.navigate(['login']);
    } else {
      const id = +this.route.snapshot.paramMap.get('id');
      this.hotelService.getHotel(id).subscribe(
        hotel => {
          this.hotel = hotel;
        }
      );
      this.rooms = this.searchSVC.searchData.noOfRooms;
      this.toDateMin = new Date(this.searchSVC.searchData.fromDate);
      console.log('date', this.searchSVC.searchData.toDate);
      this.firstFormGroup = this._formBuilder.group({
        checkinDate: [''],
        checkoutDate: [''],

      });
      this.secondFormGroup = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.compose([ Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
        adharNumber: ['', Validators.compose([ Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
        address: ['', Validators.required],
      });
      this.thirdFormGroup = this._formBuilder.group({
        card1: ['', Validators.required],
        card2: ['', Validators.compose([ Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
        card3: ['', Validators.compose([ Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
        card4: ['', Validators.compose([ Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
        month: ['', Validators.required],
        year: ['', Validators.required],
        cvv: ['', Validators.required],
      });
    }
  }
  changeTime(event, value) {
    this.toDateMin = new Date(value);
  }
  onSubmit(tab) {
    this.booked = this.secondFormGroup.value;
    this.booked.cardDetails = new CardDetails();
    this.booked.cardDetails.cardNumber = this.thirdFormGroup.value.card1 + '-' +
      this.thirdFormGroup.value.card2 + '-' + this.thirdFormGroup.value.card3 + '-' + this.thirdFormGroup.value.card4;
    this.booked.cardDetails.CVV = this.thirdFormGroup.value.cvv;
    this.booked.cardDetails.expiryDate = this.thirdFormGroup.value.month + '/' + this.thirdFormGroup.value.year;
    this.myQrCodeId = this.booked.adharNumber;
    this.setBookingDetails();
  }
  getHotel(id: number) {
    this.hotelService.getHotel(id).subscribe(
      hotel => {
        this.hotel = hotel;
      }

    );

  }

  setBookingDetails() {
    const username = this.userSVC.loggedInUserName.split('@', 1);
    this.booked.id = '';
    this.booked.userId = username[0];
    this.booked.hotelId = this.hotel.id;
    this.booked.NoOfRooms = Number(this.rooms) ;
    this.booked.bookedDate = new Date();
    this.booked.fromDate = this.fromDate.nativeElement.value;
    this.booked.toDate = this.toDate.nativeElement.value;
    this.booked.paid =  this.rooms * this.selectedValue + this.selectedValue * 0.18;
    this.booked.checkInStatus = 0;
    this.hotelService.addBooking(this.booked)
    .subscribe();
 }

  openSnackBar() {
    // debugger;
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
  })
  .then(sub => {this.newsletterService.addPushSubscriber(sub).subscribe(
    () => console.log('Sent push subscription object to server.'),
  err =>  console.log('Could not send subscription object to server, reason: ', err)
);
  })
  .catch(err => console.error('Could not subscribe to notifications', err));

    this.hotelService.snackBarData = 'Thank you !! Room succesfully booked';
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });

  }
  sendNewsletter() {
    console.log('Sending Newsletter to all Subscribers ...');
    this.newsletterService.send().subscribe();
}
}
// @Component({
//   selector: 'app-confirm-popup',
//   templateUrl: 'confirm-popup.html',
//   styleUrls: ['./book-room.component.css']
// })

// export class ConfirmPopupComponent {

//   constructor(
//     public dialogRef: MatDialogRef<ConfirmPopupComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   close(option): void {
//     this.dialogRef.close(option);
//   }
// }
