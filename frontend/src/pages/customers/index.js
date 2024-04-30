import React, { useEffect, useState } from 'react';
import { Stack, Grid, Typography, Button, Pagination } from '@mui/material';
import CustomersTable from 'components/customers/CustomersTable';
import MainCard from 'components/MainCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Header from 'components/general/Header';
import { useDispatch, useSelector } from '../../../node_modules/react-redux/dist/react-redux';
import { getCustomers, deleteCustomer } from 'store/reducers/contactsActions';

function Customers() {
  const dispatch = useDispatch();
  const { customers, loading } = useSelector((state) => state.contacts);
  useEffect(() => {
    const loadCustomers = () =>{
      dispatch(getCustomers());
      
    }

    loadCustomers()
  }, [dispatch]);

  const handleDelete = async (customerId) => {
    const response = await dispatch(deleteCustomer(customerId));
    if (response) {
      const loadCustomers = async () => {
        await dispatch(getCustomers());
      };
      loadCustomers();
      console.log('customers fetched');
    }
  };
  return (
    <>
      <Header title="العملاء" btnTitle="عميل جديد" icon={<FontAwesomeIcon icon={faUserPlus} />} link="/customers/create" />
      <Grid Container>
        <Grid item>
          <MainCard content={false} sx={{ mt: 3, pb: 5 }}>
            <Stack direction="column" spacing={4.5}>
              {!customers ? 'يتم تحميل العملاء' : <CustomersTable data={customers} handleDelete={handleDelete} />}
              {/* <Pagination count={0} shape="rounded" color="primary" /> */}
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Customers;
