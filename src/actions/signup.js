import axios from 'axios'

export const REGISTER = 'REGISTER'

export function register(user) {
    const request = axios.post(`/api/register`, user)
    return {
        type: REGISTER,
        payload: request
    }
}