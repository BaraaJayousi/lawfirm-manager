import { createSlice } from '@reduxjs/toolkit';
import { getData, userLogin, userLogout } from './authActions';

// initialize userToken from local storage
const accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
const refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null;
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  loading: false,
  userInfo: userInfo,
  accessToken: accessToken,
  refreshToken: refreshToken,
  error: null,
  success: false
};

const authentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(userLogout.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.error = action.payload;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      })
      .addCase(getData.pending, (state) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      });
  }
});

export default authentication.reducer;
