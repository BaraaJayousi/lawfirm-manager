import React from 'react';
import { Stack, Grid } from '@mui/material';
import Header from 'components/general/Header';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import NewCustomerForm from './NewCustomerForm';

function CreateNewCustomer({newCustomer = true}) {
  return (
    <>
      <Stack spacing={2}>
        {newCustomer ? <Header title="عميل جديد" /> : <Header title="تعديل بيانات العميل" />}
        <Grid container spacing={0}>
          <NewCustomerForm newCustomer={newCustomer} />
        </Grid>
      </Stack>
    </>
  );
}

export default CreateNewCustomer;
