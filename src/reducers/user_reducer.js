import { GET_USER } from '../actions/get_user'

const INITIAL_STATE = {all: '', post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case `${GET_USER}_PENDING`:
            return {}
        case `${GET_USER}_FULFILLED`:
            return {...state, all: action.payload.data}
        case `${GET_USER}_REJECTED`:
            return {...state, error: action.payload.data}
        default:
            return state;
    }
}