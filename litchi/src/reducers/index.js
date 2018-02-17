import { combineReducers } from 'redux';
import authReducer from './auth';
import adminReducer from './admin'
import contentReducer from './content'

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    content: contentReducer
  });
export default rootReducer;