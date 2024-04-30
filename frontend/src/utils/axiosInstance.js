import axios from 'axios';
import { jwtDecode } from '../../node_modules/jwt-decode/build/cjs/index';
import dayjs from 'dayjs';

const baseUrl = process.env.REACT_APP_BACKEND_API;

const token = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '';
const refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null;
const axiosInstance = axios.create({
  baseURL: baseUrl,
  'Content-Type': 'application/json',
  headers: { Authorization: localStorage.getItem('accessToken') ? `Bearer ${token}` : null }
});

axiosInstance.interceptors.request.use(async (req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    const user = jwtDecode(token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) {
      return req;
    } else {
      try {
        const res = await axios.post(`${baseUrl}/api/auth/token/refresh/`, { refresh: refreshToken });
        if (res.status == 200) {
          console.log('token refreshed successfully');
          localStorage.setItem('accessToken', res.data.access);
          req.headers.Authorization = `Bearer ${res.data.access}`;
          return req;
        } else {
          return req;
        }
      } catch (err) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userInfo');
        return req;
      }
    }
  }
});

export default axiosInstance;
