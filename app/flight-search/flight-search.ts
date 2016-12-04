import {FlightService} from '../services/flight.service';
import {BookingEventService} from '../services/booking-event.service';
import {Flight} from "../shared/flight";

export class FlightSearchController {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public selectedFlight: Flight = null;

    private _flightService: FlightService;
    private _bookingEventService: BookingEventService;

    constructor(flightService: FlightService, bookingEventService: BookingEventService){
        this._flightService = flightService;
        this._bookingEventService = bookingEventService;
    }

    getFlights () {
        return this._flightService.flights;
    }

    search () {

        return this
            ._flightService
            .find(this.from, this.to)
            .catch(function (resp) {
                console.debug(resp);
            }); 
    }

    select (f: Flight) {
        this.selectedFlight = f;
        this._bookingEventService.publish(f);
    }    
}

