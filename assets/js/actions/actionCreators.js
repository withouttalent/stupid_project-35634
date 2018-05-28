import fetch from 'isomorphic-fetch';
import { RSAA } from 'redux-api-middleware'
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./LoginActions";
import axios from 'axios';



// export const fetchApi = (reducer, url, token) => ({
//     [RSAA]: {
//         endpoint: 'http://127.0.0.1:8000/api/v0/' + url,
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', 'Authorization': 'JWT ' + token },
//         types: reducer,
//     }
// })

export function fetchApi(reducer, url, token) {
    return (dispatch) => {
        dispatch({type:reducer[0]});
        axios.get('http://127.0.0.1:8000/api/v0/' + url, {headers: {'Authorization': 'JWT ' + token}})
            .then(data => data.data)
            .then(items => dispatch({type:reducer[1], payload:items}))
    }
}