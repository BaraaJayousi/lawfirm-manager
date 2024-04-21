import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControl, FormHelperText, Stack, TextField } from '@mui/material';
import dayjs from 'dayjs';

function ExpenseForm() {
  let today = `${dayjs().get('y')}-${dayjs().get('M') + 1}-${dayjs().get('D')}`;
  return (
    <Stack direction="column" spacing={2}>
      <Stack spacing={1.5} direction="row" alignItems="flex-start" justifyContent="space-between">
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="input-session-name" aria-describedby="session-name" label="نوع المصروف" variant="outlined" />
          <FormHelperText id="my-helper-text">نوع المصروفات</FormHelperText>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="input-session-name" aria-describedby="session-name" label="اسم المصروف له" variant="outlined" />
          <FormHelperText id="my-helper-text">اسم المصروف له</FormHelperText>
        </FormControl>
      </Stack>
      <Stack spacing={1.5} direction="row" alignItems="center" justifyContent="space-between">
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="outlined-multiline-static" type="number" label="المبلغ" />
          <FormHelperText id="my-helper-text">حدد قيمة المبلغ</FormHelperText>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(today)} />
            <FormHelperText id="date-helper-text">اختر تاريخ دفع المصروف</FormHelperText>
          </LocalizationProvider>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="outlined-multiline-static" label="طريقة الدفع" />
          <FormHelperText id="my-helper-text">حدد طريقة الدفع</FormHelperText>
        </FormControl>
      </Stack>
      <FormControl variant="outlined" sx={{ width: '100%' }}>
        <TextField id="outlined-multiline-static" label="وذلك عن" />
        <FormHelperText id="my-helper-text">حدد اسم الجهة المدفوع لها</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" sx={{ width: '100%' }}>
        <TextField id="outlined-multiline-static" label="ملاحظات" multiline row={8} />
        <FormHelperText id="my-helper-text">اضف ملاحظات و تفاصيل اخرى</FormHelperText>
      </FormControl>
    </Stack>
  );
}

export default ExpenseForm;
