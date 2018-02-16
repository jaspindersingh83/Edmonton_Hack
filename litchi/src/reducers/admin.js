import {CREATE_ITEM, AUTHENTICATION_ERROR} from '../actions'

const adminReducer = (admin={}, action) =>{
    switch(action.type){
        //When item is created send itemUploaded in props 
        case CREATE_ITEM:
          return {...admin,itemUploaded: action.payload}

        case AUTHENTICATION_ERROR:
          return {...admin, error:action.payload};
        
        default:
          return admin;
    }
}

export default adminReducer;