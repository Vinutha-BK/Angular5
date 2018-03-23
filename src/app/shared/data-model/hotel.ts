/* Defines the hotel entity */
export class Hotel {
    id: number;
    hotelName: string;
    tags?: string[];
    description: string;
    starRating: number;
    thumbnailImage: string;
    userId: string;
    userName: string;
    bookedDate: Date;
    location: string;
    price: number;
}
export class Booked {
    id: string;
    userId: string;
    hotelId: number;
    NoOfRooms: number ;
    bookedDate: Date;
    fromDate: Date;
    toDate: Date;
    paid: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    adharNumber: string;
    address: string;
    checkInStatus: number;
    cardDetails: CardDetails;
}
export class CardDetails {
    cardNumber: string;
    CVV: number;
    expiryDate: string;
}

export class SearchData {
    location: string;
    fromDate: any;
    toDate: any;
    noOfRooms: number;
}
