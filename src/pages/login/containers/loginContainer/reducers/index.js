import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { alert } from './alert';

const loginReducer = combineReducers({
  authentication,
  alert
});

export default loginReducer;
