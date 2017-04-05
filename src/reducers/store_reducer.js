import { GET_STORE_PRODUCTS } from '../actions/products'
const INITIAL_STATE = {all: [], post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_STORE_PRODUCTS:
            return {...state, all: action.payload.data}
        default:
            return state;
    }
}