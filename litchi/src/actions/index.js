import axios from 'axios'
export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const ADMIN_AUTHORIZED = 'ADMIN_AUTHORIZED';
export const CREATE_ITEM = 'CREATE_ITEM'
export const GETALL_GENRES = 'GETALL_GENRES'
export const GET_ITEMBYID = 'GET_ITEMBYID'
export const FORGOTPASSWORD = 'FORGOTPASSWORD'
export const RESETPASSWORD = 'RESETPASSWORD'
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
        history.push('/genres');
        return {
            type:LOGIN,
            payload:loginrequest
        }
    } catch (error){
        return authError(error.response.data.message);
    }     
}
export const forgotPassword = async(email) => {
    try{
        await axios.post(`${ROOT_URL}/forgotpassword`,{email});
        return {
            type:FORGOTPASSWORD
        }
    }catch(error){
        return authError(error.response.data.message);
    }
}

export const resetPassword = async(passwords, history) => {
    let token = localStorage.getItem('token');
    try{
        await axios.post(`${ROOT_URL}/reset`,
            passwords,
            { 
                headers: {
                Authorization: token
                }
            }
        );
        history.push('/login')
        return {
            type:RESETPASSWORD
        }
    }catch(error){
        return authError(error.response.data.message);
    }
}
export const logout = async (history) =>{
    const apiurl = `${ROOT_URL}/logout`;
    const token = localStorage.getItem('token')
    try {
        await axios.get(apiurl,
            { 
                headers: {
                  Authorization: token
                }
            }
        );
        //remove the JWT from local storage
        localStorage.removeItem('token');
        history.push('/login');
        return {
            type:LOGOUT
        }
    } catch (error){
        return authError(error.response.data.message);
    }
}

export const adminAuth = async (history) => {   
    try{
        const token = localStorage.getItem('token')
        await axios.get(
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
        return authError('You are not authorized as admin');
    }
}

export const createItem = async(item) => {
    try{
        await axios
            .post(
            `${ROOT_URL}/createitem`,
            item, 
            { 
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
        return dispatch => {
            dispatch({type: CREATE_ITEM, payload: true})
            setTimeout(() => {
                dispatch({type: CREATE_ITEM})
            }, 4000)
        }
    } catch(error){
        if(error.response.data.message.errmsg) {
            let str = error.response.data.message.errmsg;
            let arr = str.split(' ');
            let duplicateType = ((arr[arr.indexOf('index:')+1]).split('_'))[0]
            let duplicateKey = arr[arr.indexOf('key:')+3]
            return authError(`Alredy Uploaded an item with ${duplicateType} ${duplicateKey}`);
        }
        return authError(error.response.data.errmsg);
    }
}



export const getAllgenres = async(history) => {
    const token = localStorage.getItem('token')
    try{
        let getRequest = 
        await axios
                .get( 
                    `${ROOT_URL}/genres`,
                    { 
                        headers: {
                            Authorization: token
                        }
                    }
                )
        return {
            type:GETALL_GENRES,
            payload:getRequest
        }
    } catch(error){
        history.push('/login');
        return authError('You are not logged in, Please login');
    }
}

export const getItemById = async (id) => {
    const token = localStorage.getItem('token')
    try{
        let getRequest = 
        await axios
                .get( 
                    `${ROOT_URL}/getitembyid/${id}`,
                    { 
                        headers: {
                            Authorization: token
                        }
                    }
                )
        
        return {
            type:GET_ITEMBYID,
            payload:getRequest
        }
    } catch(error){
        console.log(error)
    }
}