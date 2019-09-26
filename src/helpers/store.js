import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import loginReducer from '../pages/login/containers/loginContainer/reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
  loginReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
