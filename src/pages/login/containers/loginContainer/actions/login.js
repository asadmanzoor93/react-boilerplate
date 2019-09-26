import { loginConstants } from '../constants/login';
import { loginService } from '../../../../../services';
import { alert } from './alert';
import { history } from '../../../../../helpers';

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    loginService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error));

        dispatch(alert.error(error));
      }
    );
  };

  function request(user) {
    return { type: loginConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: loginConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: loginConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  loginService.logout();
  return { type: loginConstants.LOGOUT };
}
