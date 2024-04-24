import React from 'react';
import MainCard from 'components/MainCard';
import { Stack, Grid, Typography, Autocomplete, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submited form');
}
function NewCaseForm() {
  return (
    <>
      <MainCard sx={{ flexGrow: 1 }}>
        <form onSubmit={handleSubmit} action="#" method="get">
          <Grid container spacing={3}>
            <Grid item container columnSpacing={3}>
              {/* Top part */}
              <Grid item xl={4}>
                <Typography sx={{ mb: 3 }} variant="h3" color="error">
                  بيانات العميل:
                </Typography>
                <Grid item xl={12}>
                  <Autocomplete
                    disablePortal
                    id="customer_name"
                    options={customersNames}
                    renderInput={(params) => <TextField {...params} label="اختر العميل" />}
                    sx={{ mb: 3, lineHeight: '1rem' }}
                  />
                  <Autocomplete
                    disablePortal
                    id="customer_type"
                    options={customerTypes}
                    renderInput={(params) => <TextField {...params} label="اختر نوع العميل" />}
                  />
                </Grid>
              </Grid>
              <Grid item xl={8}>
                <Typography variant="h3" color="error" sx={{ mb: 3 }}>
                  بيانات الخصم:
                </Typography>
                <Grid container columnSpacing={3} rowSpacing={4} direction="row">
                  <Grid item xl={4}>
                    <TextField
                      fullWidth
                      label="عنوان الخصم"
                      sx={{
                        '& .MuiInputLabel-root': { fontSize: '1rem', lineHeight: '1.4rem' },
                        '& .MuiOutlinedInput-root': { fontSize: '1.3rem' }
                      }}
                    />
                  </Grid>
                  <Grid item xl={4}>
                    <TextField fullWidth label="عنوان الخصم" />
                  </Grid>
                  <Grid item xl={4}>
                    <TextField fullWidth label="عنوان الخصم" />
                  </Grid>
                  <Grid item xl={4}>
                    <TextField fullWidth label="عنوان الخصم" />
                  </Grid>
                  <Grid item xl={4}>
                    <TextField fullWidth label="عنوان الخصم" />
                  </Grid>
                  <Grid item xl={4}>
                    <TextField fullWidth label="عنوان الخصم" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              {/* Bottom part */}
              <Typography variant="h3" color="error" sx={{ mb: 3 }}>
                بيانات القضيه و العقد:
              </Typography>
              <Grid container columnSpacing={3} rowSpacing={4} direction="row">
                <Grid item xl={3}>
                  <Autocomplete
                    disablePortal
                    id="case_type"
                    options={caseType}
                    renderInput={(params) => <TextField {...params} label="اختر نوع القضيه" />}
                  />
                </Grid>
                <Grid item xl={3}>
                  <TextField fullWidth label="عنوان الخصم" />
                </Grid>
                <Grid item xl={3}>
                  <TextField fullWidth label="عنوان الخصم" />
                </Grid>
                <Grid item xl={3}>
                  <TextField fullWidth label="عنوان الخصم" />
                </Grid>
                <Grid item xl={3}>
                  <TextField fullWidth label="عنوان الخصم" />
                </Grid>
                <Grid item xl={6}>
                  <TextField fullWidth label="عنوان الخصم" />
                </Grid>
                <Grid item xl={3}>
                  <TextField size="normal" fullWidth label="عنوان الخصم" />
                </Grid>
                <Grid item xl={12}>
                  <TextField multiline rows={5} fullWidth label="عنوان الخصم" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" xl={12}>
              <Grid item xl={4}>
                <Button variant="contained" size="large" fullWidth type="submit">
                  إضافه
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </>
  );
}

const customersNames = [
  { label: 'محمد خالد سعديه' },
  { label: 'عمر محمود كباريه' },
  { label: 'جمال رافت الغل' },
  { label: 'اوس عبدالرحمن غانم' },
  { label: 'شرين عبد ربو' },
  { label: 'ايوان عامر صبيحه' },
  { label: 'ابراهيم شريف شريفه' },
  { label: 'مالك محمود عوده' }
];

const customerTypes = [{ label: 'مدعي' }, { label: 'مدعى عليه' }];
const caseType = [{ label: 'جنائي' }, { label: 'طلاق' }];
export default NewCaseForm;
