import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import PaymentsTable from './PaymentsTable';
import MainCard from 'components/MainCard';
import NewPaymentModal from './NewPaymentModal';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack direction="column" alignItems="flex-start" spacing={4.5}>
      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <Typography variant="h4">دفعات القضيه</Typography>
        <Button onClick={handleOpen} variant="contained">
          اضافة دفعه
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <MainCard sx={{ width: '100%' }}>
          <PaymentsTable />
        </MainCard>
      </Stack>
      <NewPaymentModal openModal={open} handleClose={handleClose} />
    </Stack>
  );
};

export default index;
