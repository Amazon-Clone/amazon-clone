import axios from 'axios'

export const LOGIN = 'LOGIN'

export function login(user) {
    const request = axios.post(`/api/login`, user)
    return {
        type: LOGIN,
        payload: request
    }
}