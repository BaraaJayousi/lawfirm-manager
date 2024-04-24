import React from 'react'

import { StarOutlined  } from '@ant-design/icons';


import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

import MainCard from 'components/MainCard';

function AnalyticFinance({title, count, icon, secondaryText, dueAmount, bgColor}) {
return (
<MainCard contentSX={{ p: 2.25, backgroundColor: `${bgColor}`}} >
    <Stack direction='column' spacing={1.5}>
        <Grid container direction="row"  justifyContent="space-between"  alignItems="center">
            <Grid item>
                <Typography variant="h5" color="secondary.A100">
                    {title}
                </Typography>
                <Typography variant="h4" color="inherit">
                    {count}
                </Typography>
            </Grid>
            <Grid item>
                {/* recive icon component and renders nothing if empty */}
                {!!icon && (
                    <Box sx={{fontSize:"20px", backgroundColor:"secondary.A100", padding:".2em .5em", borderRadius:"100%", }}>
                    {icon}
                </Box>
                )}
            </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
                <Typography variant="h5" color="secondary.A100">
                    {secondaryText}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" color="inherit">
                    {dueAmount}
                </Typography>
            </Grid>
            
        </Grid>
    </Stack>
</MainCard>
)
}

AnalyticFinance.defaultProps = {
    icon:<StarOutlined/>
};

export default AnalyticFinance