import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewSessionModal from './NewSessionModal';

const SessionAccordion = ({ sessionNum, sessionDate, details }) => {
  //use redux to control the state of the accordion
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // use redux to control the modal and pass the data to it
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<FontAwesomeIcon icon="fa-solid fa-angle-down" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <Stack direction="row" spacing={1} sx={{ width: '33%' }} alignItems="flex-end">
          <Typography variant="h5" sx={{ color: 'text.primary' }}>رقم الجلسه:</Typography>
          <Typography variant="body1" sx={{ color: 'secondary.A100' }}>{sessionNum}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="flex-end">
          <Typography variant="h5" sx={{ color: 'text.primary' }}>تاريخ الجلسه:</Typography>
          <Typography variant="body1" sx={{ color: 'secondary.A100' }}>{sessionDate}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.5}>
          <Typography variant="h4" sx={{ mt: '8px' }}>
            تفاصيل الجلسه:
          </Typography>
          <Typography variant="body1">{details}</Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="success" endIcon={<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />} onClick={handleOpen}>
              تعديل
            </Button>
            <Button variant="outlined" color="error" endIcon={<FontAwesomeIcon icon="fa-solid fa-trash" />}>
              حذف
            </Button>
          </Stack>
        </Stack>
      </AccordionDetails>
      <NewSessionModal openModal={open} handleClose={handleClose} />
    </Accordion>
  );
};

export default SessionAccordion;
