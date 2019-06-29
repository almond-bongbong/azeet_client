import axios from 'axios';
import qs from 'query-string';

export const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.azeet.io' : 'http://localhost:8080';

// export function setAuthorization() {
//   axios.defaults.headers.common.Authorization = getCookie('Authentication');
// }

export function initAxios() {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 8000;
  axios.defaults.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' });

  axios.interceptors.response.use(response => response.data, (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  });
}
