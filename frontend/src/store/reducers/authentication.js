import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './authActions';

const initialState = {
  loading: false,
  userInfo: null,
  accessToken: null,
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
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
        state.userInfo = null;
        state.accessToken = null;
      });
  }
});

export default authentication.reducer;
