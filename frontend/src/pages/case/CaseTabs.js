import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SessionsCard from './SessionsCard';
import CaseDocuments from './CaseDocuments';
import CasePayments from './CasePayments';

function CaseTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="جلسات القضيه" value="1" />
            <Tab label="مدفوعات القضيه" value="2" />
            <Tab label="ملفات القضيه" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <SessionsCard />
        </TabPanel>
        <TabPanel value="2">
          <CasePayments />
        </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel> */}
        <TabPanel value="3">
          <CaseDocuments />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default CaseTabs;
