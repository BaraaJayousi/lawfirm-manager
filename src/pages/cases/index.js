import Header from 'components/general/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CasesTable from './CasesTable';
import MainCard from 'components/MainCard';
import { Stack } from '@mui/material';

const index = () => {
  return (
    <>
      <Stack spacing={2}>
        <Header title="قضايا العملاء" btnTitle="قضيه جديده" icon={<FontAwesomeIcon icon="fa-solid fa-gavel" />} />
        <MainCard>
          <CasesTable />
        </MainCard>
      </Stack>
    </>
  );
};

export default index;
