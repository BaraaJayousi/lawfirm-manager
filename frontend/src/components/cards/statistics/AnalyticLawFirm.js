import PropTypes from 'prop-types';

//ant design
import { StarOutlined  } from '@ant-design/icons';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets

import React from 'react'

function AnalyticLawFirm({ title, count, icon}) {
return (
    <MainCard contentSX={{ p: 2.25 }} sx={{pb:2.25}}>
    <Stack  direction="row"  justifyContent="space-between" alignItems='center'>
        <Grid container>
            <Grid item>
                {/* recive icon component and renders nothing if empty */}
                {!!icon && (
                    <Box sx={{fontSize:"20px", backgroundColor:"secondary.400", padding:"5px 10px", borderRadius:"100%", }}>
                    {icon}
                </Box>
                )}
            </Grid>
        </Grid>
        <Grid container alignItems="center" direction="column">
            <Grid item >
                <Typography variant="h6" color="textSecondary">
                    {title} 
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4" color="inherit">
                {count}
                </Typography>
            </Grid>
        </Grid>
    </Stack>
    </MainCard>
)
}

AnalyticLawFirm.propTypes = {
    title: PropTypes.string,
    count: PropTypes.string,
};

AnalyticLawFirm.defaultProps = {
    icon:<StarOutlined/>
};

export default AnalyticLawFirm