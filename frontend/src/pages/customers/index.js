import React from 'react'
import { Stack, Grid, Typography, Button, Pagination } from '@mui/material';
import CustomersTable from 'components/customers/CustomersTable';
import MainCard from 'components/MainCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function index() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3">جميع العملاء</Typography>
        <Button variant="contained" startIcon={<FontAwesomeIcon icon={faUserPlus} />}>
          <Typography variant="h5">عميل جديد</Typography>
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
    </>
  )
}

export default index