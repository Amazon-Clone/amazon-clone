import axios from 'axios'

export const LOGIN = 'LOGIN'
export const GET_USER = 'GET_USER'

export function login(user) {
    const request = axios.post(`/api/login`, user).then((response)=> {
        console.log(response.data)
    })
    return {
        type: LOGIN,
        payload: request
    }
}
export function getUser() {
    const request = axios.post(`/api/user`).then((response)=> {
        console.log("back: ", response.data)
    })
    return {
        type: GET_USER,
        payload: request
    }
}