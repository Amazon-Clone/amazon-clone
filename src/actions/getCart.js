import axios from 'axios'

export const GET_CART = 'GET_CART';
export const GET_CART_FULFILLED = 'GET_CART_FULFILLED';


export function getCart() {
    const request = axios.get(`/api/cart`)
    return {
        type: GET_CART,
        payload: request
    }
}