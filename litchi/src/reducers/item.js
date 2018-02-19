import {GET_ITEMBYID} from '../actions'


const itemsReducer = (item=[], action) =>{
    switch(action.type){
        case GET_ITEMBYID:
          return action.payload.data
        
        default:
          return item;
    }
}
export default itemsReducer;