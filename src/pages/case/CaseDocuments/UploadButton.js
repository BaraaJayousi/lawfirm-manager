import React from 'react';
import { Stack, Button, styled } from '../../../../node_modules/@mui/material/index';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome/index';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const UploadButton = () => {
  return (
    <Stack sx={{ width: '33%' }}>
      <Button component="label" variant="contained" size="large" startIcon={<FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" />} sx={{ width: '100%' }}>
        رفع الملف
        <VisuallyHiddenInput type="file"/>
      </Button>
    </Stack>
  );
};

export default UploadButton;
