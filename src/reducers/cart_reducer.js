import {GET_CART} from '../actions/getCart';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case `${GET_CART}_FULFILLED`:
            return action.payload.data === "Username or Password is wrong" ? {...state, post:null} : {...state, post: action.payload.data }
        default: 
            return state;
    }
}