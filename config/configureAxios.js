import axios from 'axios';
import qs from 'query-string';
import Cookie from 'js-cookie';

export const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.azeet.io' : 'http://localhost:8080';

export function setAuthorization() {
  const token = Cookie.get('authorization');
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${Cookie.get('authorization')}`;
}

export function initAxios() {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 8000;
  axios.defaults.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' });
  axios.interceptors.response.use(response => response.data, (error) => {
    if (error.response) return Promise.reject(error.response);
    return Promise.reject(error);
  });

  setAuthorization();
}
