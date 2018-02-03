import axios from 'axios'
export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';

export const createUser = (user) =>{
    const apiurl = 'http://localhost:3000/signup';
    const adduserrequest = axios.post(apiurl,user);
    return {
        type:CREATE_USER,
        payload: adduserrequest
    }
}

export const login = (user) =>{
    const apiurl = 'http://localhost:3000/login';
    const loginrequest = axios.post(apiurl,user);
    return {
        type:LOGIN,
        payload: loginrequest
    }
}