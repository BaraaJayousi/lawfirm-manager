import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'utils/axiosInstance';

const backendURL = process.env.REACT_APP_BACKEND_API;

export const userLogin = createAsyncThunk('auth/login', async (values, { rejectWithValue }) => {
  try {
    const config = {
      header: {
        'content-type': 'application/json'
      }
    };
    const { data } = await axios.post(`${backendURL}/api/auth/login/`, values);
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    localStorage.setItem('userInfo', JSON.stringify(data));
    return data;
  } catch (error) {
    if (error.response && error.response.data.detail) {
      return rejectWithValue(error.response.data.detail);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const userLogout = createAsyncThunk('auth/logout', async (values, { rejectWithValue }) => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axiosInstance.post('/api/auth/logout/', { refresh_token: `${refreshToken}` });
    if (response.status == 204) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userInfo');
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data.detail) {
      return rejectWithValue(error.response.data.detail);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getData = createAsyncThunk('auth/test', async (values, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/api/auth/profile/');
    if (response.status == 200) {
      console.log('user is authenticated' + response.data.msg);
    }
    console.log("wrong response")
  } catch (err) {
    console.log('get test: ' + err);
    if (error.response && error.response.data.detail) {
      return rejectWithValue(error.response.data.detail);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
