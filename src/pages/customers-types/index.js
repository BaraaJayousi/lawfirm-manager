import React from 'react'
import { Stack, Grid, Typography, Button, Pagination } from '@mui/material'
import MainCard from 'components/MainCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import TypesTable from 'components/customers/TypesTable';


function createData(idNo, name) {
  return { idNo, name };}

const rows = [createData(1, 'مدعي'), createData(2, 'مدعى عليه'), createData(3, 'جاني'), createData(4, 'مجني عليه')];

const index = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3">أنواع العملاء</Typography>
        <Button variant="contained" startIcon={<FontAwesomeIcon icon={faUserPlus} />}>
          <Typography variant="h5">نوع جديد</Typography>
        </Button>
      </Stack>
      <Grid Container>
        <Grid item>
          <MainCard content={false} sx={{ mt: 3, pb: 5 }}>
            <Stack direction="column" spacing={4.5}>
              <TypesTable typesEnteries={rows}/>
              <Pagination count={10} shape="rounded" color="primary" />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
