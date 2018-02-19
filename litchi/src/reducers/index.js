import { combineReducers } from 'redux';
import authReducer from './auth';
import adminReducer from './admin';
import contentReducer from './content';
import itemsReducer from './item'

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    content: contentReducer,
    item : itemsReducer
  });

export default rootReducer;