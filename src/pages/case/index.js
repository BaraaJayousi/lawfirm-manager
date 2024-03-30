import Header from 'components/general/Header';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Stack, Grid, Typography } from '@mui/material';
import CaseCard from './CaseCard';
import AnalyticFinance from 'components/cards/statistics/AnalyticFinance';
import MainCard from 'components/MainCard';
import CaseTabs from './CaseTabs';

const index = () => {
  return (
    <>
      <Stack spacing={2}>
        <Header title="تفاصي القضيه" btnTitle="تعديل" icon={<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />} />
        <Grid container spacing={0} >
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <CaseCard />
          </Grid>
          {/* right side */}
          <Grid
            container
            item
            direction="row"
            alignItems="flex-start"
            xs={12}
            sm={12}
            md={8}
            xl={8}
            spacing={1}
            sx={{ pl: 1, maxHeight: '16px' }}
          >
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <AnalyticFinance
                title="مبلغ القضيه"
                count="7,00.00$"
                bgColor="success.main"
                icon=<FontAwesomeIcon icon="fa-solid fa-gavel" style={{ color: '#000000' }} />
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <AnalyticFinance
                title="المبلغ المدفوع"
                count="5,00.00$"
                bgColor="primary.main"
                icon=<FontAwesomeIcon icon="fa-solid fa-gavel" style={{ color: '#000000' }} />
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <AnalyticFinance
                title="المبلغ المتبقي"
                count="2,00.00$"
                bgColor="secondary.main"
                icon=<FontAwesomeIcon icon="fa-solid fa-gavel" style={{ color: '#000000' }} />
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <MainCard>
                <CaseTabs />
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
);
};

export default index;