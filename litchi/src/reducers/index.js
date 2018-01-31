import { combineReducers } from 'redux';
import {CREATE_USER, LOGIN} from '../actions/index'

const authReducer = (users= [], action) => {
    switch(action.type){
        case CREATE_USER:
          return action.payload.data;
    
        case LOGIN:
          return action.payload.data;
        
        default:
          return users;
    }
    
}


const rootReducer = combineReducers({
    auth: authReducer
  });
export default rootReducer;