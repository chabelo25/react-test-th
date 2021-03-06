import { types } from "../types/types";
const initialState = { 
    flights: [],
    form_valid: false
};
export const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.ADD_NEW_FLIGHTS:
            return {
                ...state,
                flights: state.flights.concat(action.payload)
            }
        case types.UPDATE_PASSENGER_FLIGHT:
            return {
                ...state,
                flights: state.flights.filter(flight => {
                    if(flight.id == action.payload.id){
                        flight.passengers = flight.passengers + action.payload.passengers
                    }
                    return flight
                })
            }
        case types.DELETE_FLIGHT:
            return {
                ...state,
                flights: state.flights.filter( flight => flight.id != action.payload.id)
            }
        case types.REMOVE_LAST_FLIGHT: {
            return {
                ...state,
                flights: state.flights.slice(0,-1)
            }
        }
        case types.DELETE_ALL_FLIGHTS: {
            return {
                ...state,
                flights: []
            }
        }
        default:
            return state;
    }
}