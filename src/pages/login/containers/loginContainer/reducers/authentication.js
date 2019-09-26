import { loginConstants } from '../constants/login';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case loginConstants.LOGIN_FAILURE:
      return {};
    case loginConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
