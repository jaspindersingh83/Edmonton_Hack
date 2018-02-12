import {CREATE_USER, LOGIN, AUTHENTICATION_ERROR, ADMIN_AUTHORIZED} from '../actions/index'

const authReducer = (auth={}, action) => {
  switch(action.type){
    case CREATE_USER:
      return {...auth,signedUpusername: action.payload.data.username};

    case AUTHENTICATION_ERROR:
      return {...auth,error:action.payload};

    case LOGIN:
      return {...auth};
    
    case ADMIN_AUTHORIZED:
      return {...auth,admin: true};
    
    default:
      return auth;
  }
}

export default authReducer;