import { GET_STORE_PRODUCTS_FULFILLED } from '../actions/products'

var INITIAL_STATE = { all: [] ,post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_STORE_PRODUCTS_FULFILLED:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}