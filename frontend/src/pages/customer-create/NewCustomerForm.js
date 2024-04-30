import React, { useEffect, useState } from 'react';
import MainCard from 'components/MainCard';
import { Formik, Form } from 'formik';
import axiosInstance from 'utils/axiosInstance';
import * as Yup from 'yup';
import AnimateButton from 'components/@extended/AnimateButton';

// material-ui
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  TextField
} from '@mui/material';
import { jwtDecode } from '../../../node_modules/jwt-decode/build/cjs/index';
import { useNavigate, useParams } from '../../../node_modules/react-router-dom/dist/index';
import { useSelector } from '../../../node_modules/react-redux/dist/react-redux';

const user = jwtDecode(localStorage.getItem('accessToken'));

function NewCaseForm({ newCustomer }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { customers } = useSelector((state) => state.contacts);
  const [customer, setCustomer] = useState({});
  let selectedCustomer = customer;

  if (!newCustomer) {
    selectedCustomer = customers ? customers.filter((cust) => cust.id == id)[0] : navigate('/customers');
  }
  let formInitValues = newCustomer
    ? {
        name: '',
        email: '',
        date_of_birth: '',
        user_id: '',
        national_id: '',
        company_name: '',
        nationality: '',
        notes: '',
        country: '',
        state: '',
        city: '',
        address: '',
        postal_code: '',
        phone_number: '',
        contact_type: ''
      }
    : {
        name: selectedCustomer.name,
        email: selectedCustomer.email,
        date_of_birth: '',
        user_id: '',
        national_id: selectedCustomer.national_id,
        company_name: selectedCustomer.company_name,
        nationality: selectedCustomer.nationality,
        notes: selectedCustomer.notes,
        country: '',
        state: '',
        city: '',
        address: '',
        postal_code: '',
        phone_number: selectedCustomer.phone_number,
        contact_type: ''
      };
  return (
    <>
      <MainCard sx={{ flexGrow: 1 }}>
        <Formik
          initialValues={formInitValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('قم بادخال اسم العميل').max(255),
            email: Yup.string().email('قم بادخال بريد الكتروني صحيح').max(255),
            national_id: Yup.string().required('قم بادخال رقم هويه العميل'),
            nationality: Yup.string().required(),
            country: Yup.string().required(),
            state: Yup.string().required(),
            address: Yup.string().required(),
            city: Yup.string().required(),
            postal_code: Yup.string().required(),
            phone_number: Yup.string().required()
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              //make call to api
              values.user_id = user.user_id;
              if (newCustomer) {
                const response = await axiosInstance.post('/api/contact/create/', values);
                if (response.status === 201) {
                  setStatus({ success: true });
                  setSubmitting(false);
                  navigate('/customers');
                }
              }else{
                const response = await axiosInstance.put(`/api/contact/customers/${id}`, values);
                if (response.status === 200) {
                  setStatus({ success: true });
                  setSubmitting(false);
                  navigate('/customers');
              }
              }
              //pass server error
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Stack direction={{ xl: 'row', lg: 'row', xs: 'column' }} spacing={1}>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="name-create">الاسم الكامل*</InputLabel>
                      <OutlinedInput
                        id="name-create"
                        type="text"
                        value={values.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="محمد محمود محاميد"
                        fullWidth
                        error={Boolean(touched.name && errors.name)}
                      />
                      {touched.name && errors.name && (
                        <FormHelperText error id="helper-text-name-create">
                          {errors.name}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="company_name-create">اسم الشركه (اختياري)</InputLabel>
                      <OutlinedInput
                        id="company_name-create"
                        type="text"
                        value={values.company_name}
                        name="company_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(touched.company_name && errors.company_name)}
                      />
                      {touched.company_name && errors.company_name && (
                        <FormHelperText error id="helper-text-company_name-create">
                          {errors.company_name}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="national_id-create">رقم الهويه*</InputLabel>
                      <OutlinedInput
                        id="national_id-create"
                        type="text"
                        value={values.national_id}
                        name="national_id"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(touched.national_id && errors.national_id)}
                      />
                      {touched.national_id && errors.national_id && (
                        <FormHelperText error id="helper-text-national_id-signup">
                          {errors.national_id}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={{ xl: 'row', lg: 'row', xs: 'column' }} spacing={1}>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="phone_number-create">رقم الهاتف*</InputLabel>
                      <OutlinedInput
                        id="phone_number-create"
                        type="text"
                        value={values.phone_number}
                        name="phone_number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="XXXXXXXXXX"
                        fullWidth
                        error={Boolean(touched.phone_number && errors.phone_number)}
                      />
                      {touched.phone_number && errors.phone_number && (
                        <FormHelperText error id="helper-text-phone_number-create">
                          {errors.phone_number}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="email-create">البريدالالكتروني(اختياري)</InputLabel>
                      <OutlinedInput
                        id="email-create"
                        type="emails"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText error id="helper-text-email-create">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="nationality-create">الجنسيه*</InputLabel>
                      <OutlinedInput
                        id="nationality-create"
                        type="text"
                        value={values.nationality}
                        name="nationality"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(touched.nationality && errors.nationality)}
                      />
                      {touched.nationality && errors.nationality && (
                        <FormHelperText error id="helper-text-nationality-signup">
                          {errors.nationality}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <Divider />
                    <Typography variant="h3">عنوان العميل</Typography>
                  </Stack>
                  <Stack direction={{ xl: 'row', lg: 'row', xs: 'column' }} spacing={1} sx={{ mt: 3 }}>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="country-create">الدوله*</InputLabel>
                      <OutlinedInput
                        id="country-create"
                        type="text"
                        value={values.country}
                        name="country"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="الدوله"
                        fullWidth
                        error={Boolean(touched.country && errors.country)}
                      />
                      {touched.country && errors.country && (
                        <FormHelperText error id="helper-text-country-create">
                          {errors.country}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="state-create">الولايه*</InputLabel>
                      <OutlinedInput
                        id="state-create"
                        type="states"
                        value={values.state}
                        name="state"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        placeholder="الولايه"
                        error={Boolean(touched.state && errors.state)}
                      />
                      {touched.state && errors.state && (
                        <FormHelperText error id="helper-text-state-create">
                          {errors.state}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="city-create">المدينه*</InputLabel>
                      <OutlinedInput
                        id="city-create"
                        type="text"
                        value={values.city}
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(touched.city && errors.city)}
                      />
                      {touched.city && errors.city && (
                        <FormHelperText error id="helper-text-city-signup">
                          {errors.city}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Stack>
                  <Stack direction={{ xl: 'row', lg: 'row', xs: 'column' }} spacing={1} sx={{ mt: 3 }}>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="address-create">العنوان*</InputLabel>
                      <OutlinedInput
                        id="address-create"
                        type="text"
                        value={values.address}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="العنوان"
                        fullWidth
                        error={Boolean(touched.address && errors.address)}
                      />
                      {touched.address && errors.address && (
                        <FormHelperText error id="helper-text-address-create">
                          {errors.address}
                        </FormHelperText>
                      )}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="postal_code-create">الرمزالبريدي*</InputLabel>
                      <OutlinedInput
                        id="postal_code-create"
                        type="postal_codes"
                        value={values.postal_code}
                        name="postal_code"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        placeholder="الولايه"
                        error={Boolean(touched.postal_code && errors.postal_code)}
                      />
                      {touched.postal_code && errors.postal_code && (
                        <FormHelperText error id="helper-text-postal_code-create">
                          {errors.postal_code}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1} sx={{ width: '100%' }}>
                    <InputLabel htmlFor="notes-create">ملاحظات(اختياري)</InputLabel>
                    <TextField
                      id="notes_create"
                      label="ملاحظات"
                      value={values.notes}
                      name="notes"
                      onChange={handleChange}
                      placeholder="ملاحظات اخرى"
                      onBlur={handleBlur}
                      fullWidth
                      multiline
                      rows={5}
                    />
                    {touched.notes && errors.notes && (
                      <FormHelperText error id="helper-text-notes-create">
                        {errors.notes}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {newCustomer ? 'اضافه العميل' : 'تعديل بيانات العميل'}
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </MainCard>
    </>
  );
}

export default NewCaseForm;
