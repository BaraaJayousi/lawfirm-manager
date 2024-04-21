import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControl, FormHelperText, Stack, TextField } from '@mui/material';
import dayjs from 'dayjs';

function NewPaymentForm() {
  let today = `${dayjs().get('y')}-${dayjs().get('M') + 1}-${dayjs().get('D')}`;
  return (
    <Stack direction="column" spacing={2}>
      <Stack spacing={1.5} direction="row" alignItems="flex-start" justifyContent="space-between">
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="input-session-name" aria-describedby="session-name" label="اسم الدفعه" variant="outlined" />
          <FormHelperText id="my-helper-text">اسم الدفعه</FormHelperText>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(today)} />
          </LocalizationProvider>
        </FormControl>
      </Stack>
      <Stack spacing={1.5} direction="row" alignItems="center" justifyContent="space-between">
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="outlined-multiline-static" label="المبلغ" type="number" defaultValue="10" />
          <FormHelperText id="my-helper-text">اضف قيمه الدفعه</FormHelperText>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="outlined-multiline-static" label="نوع الدفعه" type="text" />
          <FormHelperText id="my-helper-text">اضف طريقة الدفع</FormHelperText>
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default NewPaymentForm;