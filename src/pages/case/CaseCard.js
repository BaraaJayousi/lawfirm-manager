import MainCard from 'components/MainCard';
import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomerCard() {
  return (
    <>
      <MainCard>
        <Stack direction="column" spacing={2} divider={<Divider />}>
          <Stack Stack spacing={1.5} alignItems="flex-start">
            <FontAwesomeIcon icon="fa-solid fa-gavel" size="5x" style={{ marginBottom: '16px', color: '#1890ff' }} />
            <Stack direction="row" alignItems="flex-end" spacing={1.5}>
              <Typography variant="h3">رقم القضيه:</Typography>
              <Typography variant="h4" color="error.main">
                LWS00000024
              </Typography>
            </Stack>
            <Stack>
              {/* Client Information */}
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">رقم القضيه في المحكمه:</Typography>
                <Typography variant="body1">459758</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">اسم المحكمه:</Typography>
                <Typography variant="body1">LA Court House</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">اسم القاضي:</Typography>
                <Typography variant="body1">يوسف حمد</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">اسم القضيه:</Typography>
                <Typography variant="body1">Jewlery Theft</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h5" color="error" sx={{ mb: 2 }}>
              تفاصيل العميل
            </Typography>
            {/* Client Information */}
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">الاسم:</Typography>
              <Typography variant="body1">خالد مخلوف</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">رقم الهاتف:</Typography>
              <Typography variant="body1">0597755431</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">البريد الالكتروني:</Typography>
              <Typography variant="body1">info@example.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">اسم الشركه:</Typography>
              <Typography variant="body1">Plastics Ltd.</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">الجنسيه:</Typography>
              <Typography variant="body1">American</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">العنوان</Typography>
              <Typography variant="body1">NYC, USA, 10001</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h5" color="error" sx={{ mb: 2 }}>
              بيانات الخصيم
            </Typography>
            {/* Offense Information */}
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">الاسم:</Typography>
              <Typography variant="body1">John Doe</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">رقم الهاتف:</Typography>
              <Typography variant="body1">0597755431</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">البريد الالكتروني:</Typography>
              <Typography variant="body1">info@example.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">اسم المحامي:</Typography>
              <Typography variant="body1">Chris Marken</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">رقم هاتف المحامي:</Typography>
              <Typography variant="body1">0597755431</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">الجنسيه:</Typography>
              <Typography variant="body1">American</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">العنوان:</Typography>
              <Typography variant="body1">NYC, USA, 10001</Typography>
            </Stack>
          </Stack>
        </Stack>
      </MainCard>
    </>
  );
}

export default CustomerCard;
