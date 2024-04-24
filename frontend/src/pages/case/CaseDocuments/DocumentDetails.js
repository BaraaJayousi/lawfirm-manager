import React from 'react';
import { Divider, FormControl, FormHelperText, Input, Stack, TextField } from '../../../../node_modules/@mui/material/index';
import UploadButton from './UploadButton';

const DocumentDetails = () => {
  return (
    <Stack direction="column" spacing={2.5}>
      <Stack direction="row" spacing={1.5}>
        <FormControl variant="outlined" sx={{ width: '66%' }}>
          <TextField id="input-session-name" aria-describedby="session-name" label="اسم الملف" variant="outlined" />
          <FormHelperText id="my-helper-text">اعط اسم للملف</FormHelperText>
        </FormControl>
        <UploadButton />
      </Stack>
    </Stack>
  );
};

export default DocumentDetails;
