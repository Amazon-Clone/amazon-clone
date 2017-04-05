import { combineReducers } from 'redux';
import StoreReducer from './store_reducer'
// import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    store: StoreReducer
});

export default rootReducer;