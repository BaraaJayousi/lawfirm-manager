import React from 'react';
import { Stack, Typography } from '@mui/material';
import DocumentDetails from './DocumentDetails';

function index() {
  return (
    <Stack direction="column" spacing={1.5}>
      <Typography variant="h5">اضافه مرفقات القضيه</Typography>
      <DocumentDetails />
    </Stack>
  )
}

export default index;
