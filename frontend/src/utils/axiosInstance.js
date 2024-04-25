import axios from 'utils/axiosInstance';

const baseUrl = 'http://localhost:8000/';

const token = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : '';
const refresh_token = localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : '';
const axiosInstance = axios.create({
  baseUrl: baseUrl,
  'Content-type': 'application/json',
  headers: { Authorization: localStorage.getItem('access') ? `Bearer ${token}` : null }
});

export default axiosInstance;
