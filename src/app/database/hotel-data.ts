import { InMemoryDbService } from 'angular-in-memory-web-api';


export class HotelData implements InMemoryDbService {

    createDb() {
        const hotels = [
            {
                'id': 1,
                'hotelName': 'Pride and Prejudice',
                'tags': ['rake', 'leaf', 'yard', 'home'],
                'description': '',
                'starRating': 4.0,
                'thumbnailImage': '/assets/hotels/hotel1.jpg' ,
                'bookedDate': null,
                'location': '24/1 Vittal Mallya Road',
                'userId': '',
                'userName': '',
                'price': 4000
            },
            {
                'id': 2,
                'hotelName': 'Forever for you',
                'tags': ['rake', 'leaf', 'yard', 'home'],
                'description': '',
                'starRating': 4.0,
                'thumbnailImage': '/assets/hotels/hotel2.jpg',
                'bookedDate': null,
                'location': 'RR Nagar Bangalore',
                'userId': '',
                'userName': '',
                'price': 4000
            },
            {
                'id': 3,
                'hotelName': 'For a Change',
                'tags': ['rake', 'leaf', 'yard', 'home'],
                'description': '',
                'starRating': 4.0,
                'thumbnailImage': '/assets/hotels/hotel3.jpg',
                'bookedDate': null,
                'location': 'RR Nagar Bangalore',
                'userId': '',
                'userName': '',
                'price': 5000
            },
            {
                'id': 4,
                'hotelName': 'Life is beautifull',
                'tags': ['rake', 'leaf', 'yard', 'home'],
                'description': '',
                'starRating': 4.0,
                'thumbnailImage': '/assets/hotels/hotel4.jpg',
                'bookedDate': null,
                'location': 'RR Nagar Bangalore',
                'userId': '',
                'userName': '',
                'price': 1500
            },
            {
                'id': 5,
                'hotelName': 'Pride and Prejudice',
                'tags': ['rake', 'leaf', 'yard', 'home'],
                'description': '',
                'starRating': 4.0,
                'thumbnailImage': '/assets/hotels/hotel5.jpg',
                'bookedDate': null,
                'location': 'RR Nagar Bangalore', 'userId': '',
                'userName': '',
                'price': 2000
            }
        ];

const bookings = [{
                id: 0,
                userId: '',
                hotelId: 0,
                NoOfRooms: 0 ,
                bookedDate: null,
                fromDate: null,
                toDate: null,
                paid: 0,
                firstName: '',
                lastName: '',
                phoneNumber: 0,
                adharNumber: 0,
                address: ''}];
        return { hotels, bookings};
    }
}
