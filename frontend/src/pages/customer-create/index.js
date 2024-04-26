import React from 'react';
import { Stack, Grid } from '@mui/material';
import Header from 'components/general/Header';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import NewCustomerForm from './NewCustomerForm';

function CreateNewCustomer() {
  return (
    <>
      <Stack spacing={2}>
        <Header title="عميل جديد" />
        <Grid container spacing={0}>
          <NewCustomerForm />
        </Grid>
      </Stack>
    </>
  );
}

export default CreateNewCustomer;
