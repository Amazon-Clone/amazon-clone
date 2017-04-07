import axios from 'axios'

export const LOGIN = 'LOGIN'


// export function login(user) {
//     const request = axios.post(`/api/login`, user)
//     return {
//         type: LOGIN,
//         payload: request
//     }
// }

// export function login(dispatcher, user) {
//     const request = axios.post(`/api/login`, user).then((response)=> {
//         console.log(response.data)
//         dispatcher.dispatch({
//             type: LOGIN_COMPLETE,
//             payload: response.data
//         })
//     })
//     return {
//         type: LOGIN,
//         payload: request
//     }
// }

export function login(dispatcher, user) {
    const request = axios.post(`/api/login`, user)
    return {
        type: LOGIN,
        payload: request
    }
}