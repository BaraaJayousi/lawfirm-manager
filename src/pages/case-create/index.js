import React from 'react';
import { Stack, Grid } from '@mui/material';
import Header from 'components/general/Header';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import NewCaseForm from './NewCaseForm';

function index() {
  return (
    <>
      <Stack spacing={2}>
        <Header title="تفاصيل القضيه" />
        <Grid container spacing={0}>
          <NewCaseForm />
        </Grid>
      </Stack>
    </>
  );
}

export default index;
