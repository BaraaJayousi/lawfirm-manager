import React, { useState } from 'react'
import { Stack, Grid, Typography, Button, Pagination } from '@mui/material';
import CustomersTable from 'components/customers/CustomersTable';
import MainCard from 'components/MainCard';
import NewExpenseForm from './NewExpenseForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function index() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3">المصروفات</Typography>
        <Button variant="contained" onClick={handleOpen} startIcon={<FontAwesomeIcon icon={faUserPlus} />}>
          <Typography variant="h5">مصروف جديد</Typography>
        </Button>
      </Stack>
      <Grid Container>
        <Grid item>
          <MainCard content={false} sx={{ mt: 3, pb: 5 }}>
            <Stack direction="column" spacing={4.5}>
              <CustomersTable />
              <Pagination count={10} shape="rounded" color="primary" />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
      <NewExpenseForm openModal={open} handleClose={handleClose} />
    </>
  );
}

export default index;
