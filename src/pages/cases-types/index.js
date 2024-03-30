import React from 'react';
import { Stack, Grid, Typography, Button, Pagination } from '@mui/material';
import MainCard from 'components/MainCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import TypesTable from 'components/customers/TypesTable';


function createData(idNo, name) {
  return { idNo, name };
}

const rows = [createData(1, 'جنائي'), createData(2, 'شرعي'), createData(3, 'اخرى'), createData(4, 'قضائي')];
const index = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3">Cases Types</Typography>
        <Button variant="contained" startIcon={<FontAwesomeIcon icon={faUserPlus} />}>
          <Typography variant="h5">Add New Type</Typography>
        </Button>
      </Stack>
      <Grid Container>
        <Grid item>
          <MainCard content={false} sx={{ mt: 3, pb: 5 }}>
            <Stack direction="column" spacing={4.5}>
              <TypesTable typesEnteries={rows} />
              <Pagination count={10} shape="rounded" color="primary" />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
