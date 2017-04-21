import {GET_CART} from '../actions/cart';
import {PAY_CART} from '../actions/cart'

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case `${GET_CART}_FULFILLED`:
            return {...state, all: action.payload.data};
        case `${PAY_CART}_FULLFILED`:
            return {...state, pay: action.payload.data};
        default: 
            return state;
    }
}