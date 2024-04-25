import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const AuthVerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          otp: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          otp: Yup.string()
            .matches(/^\d+$/, 'قم بادخال ارقام فقط')
            .min(6, 'الرمز عباره عن 6 خانات كحد اقل')
            .required('قم بادخال رمز التفعيل')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            // console.log('trying to submit')
            setStatus({ success: false });
            setSubmitting(true);
            const response = await axios.post('http://localhost:8000/api/auth/verify-email/', values);
            if (response.status == 200) {
              navigate('/login')
            } else {
              setStatus({ success: false });
              setSubmitting(true);
              console.log(response)
            }
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(true);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="otp-verify">رمز التفعيل</InputLabel>
                  <OutlinedInput
                    id="otp-verify"
                    type="otp"
                    value={values.otp}
                    name="otp"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="ادخل رمز التفيعل"
                    fullWidth
                    dir="ltr"
                    inputProps={{ maxLength: 6, style: { textAlign: 'center' } }}
                    error={Boolean(touched.otp && errors.otp)}
                  />
                  {touched.otp && errors.otp && (
                    <FormHelperText error id="standard-weight-helper-text-otp-verify">
                      {errors.otp}
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
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    تفعيل البريد الالكتروني
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthVerifyEmail;
