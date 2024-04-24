import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import NewSessionModal from './NewSessionModal';
import SessionAccordion from './SessionAccordion';

const sample =
  'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي';

function SessionsCard() {
  // use redux to control the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack direction="column" alignItems="flex-start" spacing={4.5}>
      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <Typography variant="h4">جلسات القضيه</Typography>
        <Button variant="contained" onClick={handleOpen}>
          اضافه جلسه
        </Button>
      </Stack>
      <Stack spacing={1.5} direction="column" sx={{ width: '100%' }}>
        <SessionAccordion sessionNum={1} sessionDate={'2023/10/07'} details={sample} />
        <SessionAccordion sessionNum={2} sessionDate={'2023/10/13'} details={sample}/>
      </Stack>
      {/* <Typography variant="body1">No Scheduald Sessions</Typography> */}
      <NewSessionModal openModal={open} handleClose={handleClose} />
    </Stack>
  );
}

export default SessionsCard;
