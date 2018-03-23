import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel, Booked } from '../shared/data-model/hotel';
import { SearchData } from '../shared/components/search-bar/search-service';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};


@Injectable()
export class HotelService {
  private baseUrl = 'app/hotels';
  private booked = 'app/bookings';
  hotelId: number;
  snackBarData: string;
  searchData: SearchData;
  startDate: Date;
  month = [];
  year = [];
  noBooking = true;
  paid = true;
  dueAmount = 0;

  constructor(private http: HttpClient) {
    this.searchData = new SearchData();
    this.initSearchData();
    for (let i = 1; i <= 12; i ++) {
      this.month.push(i);
    }
    const date = new Date();
    const year = date.getFullYear();
    for (let i = year; i <= year + 10; i ++) {
      this.year.push(i);
    }
  }
  initSearchData() {
    this.searchData.location = '';
    this.searchData.fromDate = null;
    this.searchData.toDate = null;
    this.searchData.noOfRooms = 0;
  }

  getMonth() {
  return this.month;
}

  getYear() {
    return this.year;
}
  getHotels(): Observable<Hotel[]> {
    console.log('getHOtels()');
    return this.http.get<Hotel[]>(this.baseUrl);
  }

  getHotel(id: number): Observable<Hotel> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched hotel id=${id}`)),
      catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }

  getBookedRoom(userId: string): Observable<Booked> {
    const url = this.booked + '?userId=' + userId;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched booked hotel id=${userId}`)),
      catchError(this.handleError));
  }

  getBookedRooms(): Observable<Booked[]> {
    return this.http.get<Booked[]>(this.booked);
  }

  addBooking (booked: Booked): Observable<Booked> {
    console.log('addbooking', booked);
    this.noBooking = false;
    return this.http.post<Booked>(this.booked, booked, httpOptions)
      .catch(this.handleError);
  }
  updateBooking (hero: Booked): Observable<any> {
    return this.http.put(this.booked, hero, httpOptions)
    .catch(this.handleError);
  }
}
