import axios from 'axios'

export const GET_STORE_PRODUCTS = 'GET_STORE_PRODUCTS';

export function getStoreProducts() {
    const request = axios.get(`/api/store`)
    return {
        type: GET_STORE_PRODUCTS,
        payload: request
    }
}