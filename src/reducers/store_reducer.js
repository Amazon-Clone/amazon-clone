import { GET_STORE_PRODUCTS_FULFILLED } from '../actions/products'
import { GET_ONE_PRODUCT } from '../actions/products'

var INITIAL_STATE = { all: [] ,post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_STORE_PRODUCTS_FULFILLED:
            return {...state, all: action.payload.data};
        case `${GET_ONE_PRODUCT}_FULFILLED`: 
            return {...state, post: action.payload.data}
        default:
            return state;
    }
}



