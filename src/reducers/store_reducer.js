import { GET_STORE_PRODUCTS } from '../actions/products'
const INITIAL_STATE = {all: [], post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_STORE_PRODUCTS:
            console.log('this is action:', action)
            return {...state, all: action.payload.data}
        default:
            return state;
    }
}