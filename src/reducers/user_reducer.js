import { GET_USER } from '../actions/get_user'

const INITIAL_STATE = {all: [], post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USER:
            return {...state, all: action.payload}
        default:
            return state;
    }
}