import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'utils/axiosInstance';

export const getCustomers = createAsyncThunk('contacts/customers', async (values, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/api/contact/customers/');
    if (response.status == 200) {
      console.log(response.data);
    }
    return response;
  } catch (err) {
    if (error.response && error.response.data.detail) {
      return rejectWithValue(error.response.data.detail);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const deleteCustomer = createAsyncThunk('contacts/customers/delete', async (customerId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/api/contact/customers/${customerId}`);
    if (response.status == 200) {
      return response;
    }
  } catch (err) {
    console.log('delete a customer Error: ' + err);
    if (error.response && error.response.data.detail) {
      return rejectWithValue(error.response.data.detail);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
