import {GET_ITEMBYID, GETALL_ITEMS} from '../actions'


const itemsReducer = (item=[], action) =>{
    switch(action.type){
        case GET_ITEMBYID:
          return action.payload.data;

        case GETALL_ITEMS:
          return action.payload.data;
        
        default:
          return item;
    }
}
export default itemsReducer;