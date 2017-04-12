import axios from 'axios'

export const GET_STORE_CATEGORIES = 'GET_STORE_CATEGORIES';
export const GET_STORE_CATEGORIES_FULFILLED = 'GET_STORE_CATEGORIES_FULFILLED';

export function getStoreCategories() {
    const request = axios.get(`/api/store/categories`);
    return {
        type: GET_STORE_CATEGORIES,
        payload: request
    }
}