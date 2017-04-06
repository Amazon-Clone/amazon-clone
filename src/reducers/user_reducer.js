import { GET_USER } from '../actions/get_user'

const INITIAL_STATE = {users: [], post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USER:
            return {...state, users: action.payload.data}
        default:
            return state;
    }
}