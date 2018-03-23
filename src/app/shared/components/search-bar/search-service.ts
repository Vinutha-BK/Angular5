import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    searchData: SearchData;
    min: Date;
    constructor() {
        this.searchData = new SearchData();
    }

    setSearchData() {
        this.searchData.location = '';
        this.searchData.fromDate = null;
        this.searchData.toDate = null;
        this.searchData.noOfRooms = 0;
          }
    getSearchData() {
        return this.searchData;
    }
    }

    export class SearchData {
        location: string;
        fromDate: any;
        toDate: any;
        noOfRooms: number;
    }
