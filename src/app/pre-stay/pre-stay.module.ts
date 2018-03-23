import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFilterPipe } from '../shared/utility/hotel-filter.pipe';
import { SearchBarModule } from '../shared/components/search-bar/search-bar.module';
import { CommonModule } from '@angular/common';
import { HotelData } from '../database/hotel-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { BookRoomComponent } from '../booking/book-room/book-room.component';
import { SnackBarComponent } from '../shared/components/snack-bar/snack-bar.component';
import { NewsletterService } from '../services/newletter.service';

@NgModule({
    declarations: [
      HotelFilterPipe,
      HotelListComponent,
      BookRoomComponent,
      SnackBarComponent
    ],
    entryComponents: [SnackBarComponent],
    imports: [
      SearchBarModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AngularMaterialModule,
      QRCodeModule,
      RouterModule.forChild([
        { path: 'hotels', component: HotelListComponent, pathMatch: 'full' },
        { path: 'booking/:id',  component: BookRoomComponent, pathMatch: 'full'}
      ]),
      InMemoryWebApiModule.forRoot(HotelData)],
      exports: [
        HotelListComponent
      ],
      providers: [NewsletterService]
  })
  export class PreStayModule {}
