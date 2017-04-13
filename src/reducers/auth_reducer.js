import { LOGIN } from '../actions/login'

const INITIAL_STATE = { all: [], post: null }

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case `${LOGIN}_FULFILLED`:
            return action.payload.data === "Username or Password is wrong" ? {...state, post:null} : {...state, post: action.payload.data }
        default: 
            return state;
    }
}