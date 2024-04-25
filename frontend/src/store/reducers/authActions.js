import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:8000';

export const userLogin = createAsyncThunk('auth/login', async (values, { rejectWithValue }) => {
  try {
    const config = {
      header: {
        'content-type': 'application/json'
      }
    };
    const { data } = await axios.post(`${backendURL}/api/auth/login/`, values);
    localStorage.setItem('accessToken', data.access_token);
    return data;
  } catch (error) {
    if (error.response && error.response.data.detail) {
      return rejectWithValue(error.response.data.detail);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
