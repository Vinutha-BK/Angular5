import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchService } from './search-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public componentData1: any = '';
  public setting: any=
  {
      'showCurrentLocation': false,
      'resOnSearchButtonClickOnly': true,
      'inputPlaceholderText': 'This is delayed test',
      'recentStorageName': 'componentData3',
      'inputString': 'Bangalore, karnataka'
  };
  @Output() searchData = new EventEmitter();
  searchForm: FormGroup;
  toDateMin: Date;
  constructor(public searchSVC: SearchService, public fb: FormBuilder) {
    this.searchForm = this.fb.group({
      location: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      rooms: ['', Validators.required],

    });
    setTimeout(() => {
      this.setting['inputString'] = 'Bangalore, karnataka';
      this.setting = Object.assign({}, this.setting);
    }, 10000);

   }

  ngOnInit() {
    this.searchSVC.min = new Date();
    this.toDateMin = new Date(this.searchSVC.searchData.fromDate);

  }
  changeTime(event, value) {
    this.toDateMin = new Date(value);
  }
  autoCompleteCallback1(data: any): any {
    this.componentData1 = JSON.stringify(data);
  }
  search(location, fromDate, toDate, rooms) {

    console.log('>>>Form', this.searchForm.value)
    this.searchSVC.searchData.location = location;
    this.searchSVC.searchData.noOfRooms = rooms;
    this.searchSVC.searchData.fromDate = (fromDate === '') ? fromDate : new FormControl(new Date(fromDate));
    this.searchSVC.searchData.toDate = (toDate === '') ? toDate : new FormControl(new Date(toDate));

    console.log('searchData', this.searchSVC.searchData);
    this.searchData.emit(this.searchSVC.searchData);
  }

}
