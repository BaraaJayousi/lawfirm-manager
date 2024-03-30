import MainCard from 'components/MainCard';
import React from 'react';
import { Modal, Typography, Stack, Button, Divider } from '@mui/material';
import NewSessionForm from './NewSessionForm';


function NewSessionModal({ openModal, handleClose }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', md: '50%', lg: '50%' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  return (
    <Modal
      open={openModal}
      onClose={(_, reason) => {
        if (reason !== 'backdropClick') {
          handleClose();
        }
      }}
    >
      <MainCard sx={style}>
        <Stack spacing={1.5}>
          <Typography variant="h4">جلسه جديده</Typography>
          <NewSessionForm />
          <Divider variant="middle" />
          <Stack spacing={1.5} direction="row" alignItems="center" justifyContent="flex-end">
            <Button onClick={handleClose}>الغاء</Button>
            <Button variant="contained">حفظ</Button>
          </Stack>
        </Stack>
      </MainCard>
    </Modal>
  );
}

export default NewSessionModal;
