import axios from 'axios'

export const GET_STORE_PRODUCTS = 'GET_STORE_PRODUCTS';
const ROOT_URL = 'http://localhost:9876';

export function getStoreProducts() {
    const request = axios.get(`${ROOT_URL}/api/store`)
    return {
        type: GET_STORE_PRODUCTS,
        payload: request
    }
}