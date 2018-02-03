import axios from 'axios'
export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
//To be changed for Production
const ROOT_URL = 'http://localhost:5000';

export const authError = error => {
    return {
        type: AUTHENTICATION_ERROR,
        payload: error
    };
};

export const createUser = async (user, history) =>{
    const apiurl = `${ROOT_URL}/signup`;
    try {
        const adduserrequest = await axios.post(apiurl,user);
        history.push('/signin');
        return {
            type:CREATE_USER,
            payload:adduserrequest
        }
    } catch(error){
        return authError('Something Went Wrong');
    }
};

export const login = async (user, history) =>{
    const apiurl = `${ROOT_URL}/login`;
    try {
        const loginrequest = await axios.post(apiurl,user);
        localStorage.setItem('token', loginrequest.data.token);
        history.push('/');
        return {
            type:LOGIN,
            payload:loginrequest
        }
    } catch (error){
        return authError('Incorrect email/password combination');
    }     
}