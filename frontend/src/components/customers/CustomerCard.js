import MainCard from 'components/MainCard';
import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomerCard({data}) {
  return (
    <>
      <MainCard>
        <Stack direction="column" spacing={2} divider={<Divider />}>
          <Stack Stack spacing={0.5} alignItems="flex-start">
            <FontAwesomeIcon icon="fa-solid fa-user" size="10x" style={{ marginBottom: '16px', color: '#1890ff' }} />
            <Typography variant="h3">{data.name}</Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              الجنسيه: {data.nationality}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5" color="error" sx={{ mb: 2 }}>
              تفاصيل العميل
            </Typography>
            {/* Client Information */}
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">رقم الهاتف:</Typography>
              <Typography variant="body1">{data.phone_number}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">البريد الالكتروني</Typography>
              <Typography variant="body1">{data.email}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">اسم الشركه:</Typography>
              <Typography variant="body1">{data.company_name}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">رقم الهويه:</Typography>
              <Typography variant="body1">{data.national_id}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">العنوان:</Typography>
              <Typography variant="body1">NYC, USA, 10001</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">ملاحظات:</Typography>
              <Typography variant="body1">{data.notes}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </MainCard>
    </>
  );
}

export default CustomerCard;
