import React from 'react'

//Project imports
import AnalyticLawFirm from './../../components/cards/statistics/AnalyticLawFirm';

//MUI imports
import { Grid } from '@mui/material';
//ant desing import


//fontawsome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel, faUsers, faClock, faMoneyBillWave, faCartShopping, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import AnalyticFinance from 'components/cards/statistics/AnalyticFinance';

function StatisticalAreaCards() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={1.5}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticLawFirm title="عدد العملاء" count="4" icon=<FontAwesomeIcon icon={faUsers} style={{ color: '#000000' }} /> />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticLawFirm title="عدد القضايا" count="10" icon=<FontAwesomeIcon icon={faGavel} style={{ color: '#000' }} /> />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticLawFirm title="الجلسات" count="8" icon=<FontAwesomeIcon icon={faClock} style={{ color: '#000000' }} /> />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticFinance 
          title="الدخل الكلي"
          count="8,00$"
          secondaryText="المستحقات"
          dueAmount="500$"
          bgColor="primary.main"
          icon=<FontAwesomeIcon icon={faMoneyBillWave} style={{ color: '#000000' }} />
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticFinance
          title="المصاريف الكليه"
          count="1,00$"
          secondaryText="الديون"
          dueAmount="100$"
          bgColor="error.main"
          icon=<FontAwesomeIcon icon={faCartShopping} style={{ color: '#000000' }} />
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticFinance 
          title="الربح الكلي"
          count="7,00$"
          secondaryText="الربح المتوقع"
          dueAmount="400$"
          bgColor="success.main"
          icon=<FontAwesomeIcon icon={faSackDollar} style={{ color: '#000000' }} />
        />
      </Grid>
    </Grid>
  );
}

export default StatisticalAreaCards;
