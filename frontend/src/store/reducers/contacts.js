import { createSlice } from '@reduxjs/toolkit';
import { deleteCustomer, getCustomers } from './contactsActions';

const initialState = {
  loading: false,
  success: false,
  error: null,
  customers: null
};

const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.customers = null;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.customers = action.payload.data;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error;
        state.customers = null;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error;
        state.customers = null;
      });
  }
});

export default contacts.reducer;
