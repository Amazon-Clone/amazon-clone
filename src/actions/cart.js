import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CHECKOUT_CART = 'CHECKOUT_CART';
export const GET_CART = 'GET_CART';
export const GET_CART_FULFILLED = 'GET_CART_FULFILLED';
export const PAY_CART = 'PAY_CART';


export function addToCart(item) {
    const request = axios.post(`/api/cart`, item )
    return {
        type: ADD_TO_CART,
        payload: request
    }
}

export function checkoutCart() {
    const request = axios.post(`/api/cart/checkout`);
    return {
        type: CHECKOUT_CART,
        payload: request
    }
}

export function getCart() {
    const request = axios.get(`/api/cart`)
    return {
        type: GET_CART,
        payload: request
    }
}

export function payCart(cardObj){
    const request = axios({
        method: 'post',
        url: '/api/cart/charge',
        data: cardObj
    });

    return {
        type: GET_CART,
        payload: request
    }
}