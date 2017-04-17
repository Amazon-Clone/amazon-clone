import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import StoreReducer from './store_reducer'
import CategoriesReducer from './categories_reducer'
import UserReducer from './user_reducer'
import CartReducer from './cart_reducer.js'
// import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    store: StoreReducer,
    form: formReducer,
    categories: CategoriesReducer,
    user: UserReducer,
    cart: CartReducer
});

export default rootReducer;