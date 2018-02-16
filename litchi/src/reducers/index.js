import { combineReducers } from 'redux';
import authReducer from './auth';
import adminReducer from './admin'

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer
  });
export default rootReducer;