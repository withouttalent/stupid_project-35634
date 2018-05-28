import {LOGIN_USER} from "../constans/Page";


const initialState = {
    fetching: false,
    token: localStorage.getItem('token'),
}


export default function auth(state=initialState, action) {
    switch (action.type) {
        case "LOGIN_USER_REQUEST":
            return {...state, fetching:true};
        case "LOGIN_USER_SUCCESS":
            return {...state, fetching:false, token: action.payload};
        case "LOGIN_USER_ERROR":
            return {...state, fetching:false};
        default:
            return state;
    }
}