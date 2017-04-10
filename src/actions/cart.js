import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart(item) {
    const request = axios.post(`/api/cart`, item )
    return {
        type: ADD_TO_CART,
        payload: request
    }
}