import axios from 'axios'

export const GET_STORE_PRODUCTS = 'GET_STORE_PRODUCTS';
export const GET_STORE_PRODUCTS_FULFILLED = 'GET_STORE_PRODUCTS_FULFILLED';
export const GET_STORE_PRODUCTS_REJECTED = 'GET_STORE_PRODUCTS_REJECTED';

export function getStoreProducts() {
    const request = axios.get(`/api/store`);

    console.log(request);

    return {
        type: GET_STORE_PRODUCTS,
        payload: request
    }
}