import {GETALL_GENRES} from '../actions'


const contentReducer = (content={}, action) =>{
    switch(action.type){
        //When item is created send itemUploaded in props 
        case GETALL_GENRES:
          return {...content,...action.payload.data}
        
        default:
          return content;
    }
}
export default contentReducer;