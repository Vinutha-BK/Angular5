import {  PipeTransform, Pipe } from '@angular/core';
import { Hotel } from '../data-model/hotel';

@Pipe({
    name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

    transform(value: Array<any>, location: string): Hotel[] {

if (value && value.length) {
         return value.filter(item => {
                if (location && item.location.toLowerCase().indexOf(location.toLowerCase()) === -1) {
                    return false;
                }
                return true;
           });
        } else {
            return value;
        }
        }

}
