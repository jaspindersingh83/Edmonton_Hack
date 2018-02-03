import { combineReducers } from 'redux';
import {CREATE_USER, LOGIN, AUTHENTICATION_ERROR} from '../actions/index'

const authReducer = (auth={}, action) => {
    switch(action.type){
        case CREATE_USER:
          return {...auth};
        
        case AUTHENTICATION_ERROR:
          return {...auth,error:action.payload}
    
        case LOGIN:
          return action.payload.data;
        
        default:
          return auth;
    }
    
}


const rootReducer = combineReducers({
    auth: authReducer
  });
export default rootReducer;