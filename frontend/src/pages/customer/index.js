import Header from 'components/general/Header';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Stack, Grid, Typography } from '@mui/material';
import CustomerCard from 'components/customers/CustomerCard';
import AnalyticFinance from 'components/cards/statistics/AnalyticFinance';
import MainCard from 'components/MainCard';

const index = () => {
  return (
    <>
      <Stack spacing={2}>
        <Header title="بيانات العميل" btnTitle="قضيه جديده" icon={<FontAwesomeIcon icon="fa-solid fa-gavel" />} />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <CustomerCard />
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
                title="اجمالي مبالغ العميل"
                count="7,00$"
                bgColor="success.main"
                icon=<FontAwesomeIcon icon="fa-solid fa-gavel" style={{ color: '#000000' }} />
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <AnalyticFinance
                title="اجمالي المبالغ المدفوعه"
                count="7,00$"
                bgColor="primary.main"
                icon=<FontAwesomeIcon icon="fa-solid fa-gavel" style={{ color: '#000000' }} />
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <AnalyticFinance
                title="اجمالي المبالغ المتبقيه"
                count="7,00$"
                bgColor="secondary.main"
                icon=<FontAwesomeIcon icon="fa-solid fa-gavel" style={{ color: '#000000' }} />
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <MainCard>
                <Stack>
                  <Typography variant="h5">قضايا العميل</Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ textAlign: 'center' }}>
                    لا يوجد اي قضايا للعميل
                  </Typography>
                </Stack>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default index;