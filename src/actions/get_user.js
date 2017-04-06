import axios from 'axios'


export const GET_USER = 'GET_USER'

export function getUser() {
    const request = axios.get(`/api/user`).then((response)=> {
        console.log("back: ", response.data)
    })
    return {
        type: GET_USER,
        payload: request
    }
}