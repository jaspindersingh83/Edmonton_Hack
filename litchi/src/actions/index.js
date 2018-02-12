import axios from 'axios'
export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const ADMIN_AUTHORIZED = 'ADMIN_AUTHORIZED';
//To be changed for Production
const ROOT_URL = 'http://localhost:5000';

export const authError = error => {
    return dispatch => {
        dispatch({type: AUTHENTICATION_ERROR, payload: error})
        setTimeout(() => {
            dispatch({type: AUTHENTICATION_ERROR})
        }, 4000)
    }
};

export const createUser = async (user, history) =>{
    const apiurl = `${ROOT_URL}/signup`;
    try {
        const adduserrequest = await axios.post(apiurl,user);
        history.push('/login');
        return {
            type:CREATE_USER,
            payload:adduserrequest
        }
    } catch(error){
        if(error.message === 'Network Error') return authError('Network Error - Email jaspinder to start server')
        if(error.response.data.message.errmsg){
            const duplicateKey =error.response.data.message.errmsg
            let emailKeyWordPresent = duplicateKey.search(/email/i)
            if(emailKeyWordPresent === -1){
                return(authError('Username Unavailable'))
            }
            return authError('Email already registered')
        } 
        if(error.response.data.message) return authError(error.response.data.message);
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
        return authError(error.response.data.message);
    }     
}

export const adminAuth = async (history) => {
    const token = localStorage.getItem('token')
    try{
        const adminRequest = await axios.get(
            `${ROOT_URL}/admin`,
            { 
            headers: {
              Authorization: token
            }
        });
        return {
            type:ADMIN_AUTHORIZED
        }
    } catch (error){
        history.push('/login');
        return authError(error.response.data.message);
    }
}