import axios from 'axios'

export const LOGIN = 'LOGIN'


export function login(user) {
    const request = axios.post(`/api/login`, user).then((response)=> {
        console.log(response.data)
    })
    return {
        type: LOGIN,
        payload: request
    }
}
