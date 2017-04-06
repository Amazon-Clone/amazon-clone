import axios from 'axios'

export const REGISTER = 'REGISTER'

export function register() {
    const request = axios.post(`/api/register`)
    return {
        type: REGISTER,
        payload: request
    }
}