import { BASE_URL, loginConstants } from './api.urls';
const qs = require('querystring');
const axios = require('axios');

export const loginService = {
  login,
  logout
};

function login(username, password) {
  const url = BASE_URL + '/' + loginConstants.TOKEN_API;
  const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      username: username,
      password: password,
      grant_type: loginConstants.GRANT_TYPE,
      client_id: loginConstants.CLIENT_ID
    }),
    url
  };
  return axios(requestOptions);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
  localStorage.removeItem('expires_in');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('token_type');
}
