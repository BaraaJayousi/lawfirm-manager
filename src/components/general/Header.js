import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ title, btnTitle, icon }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{title}</Typography>
        <Button variant="contained" startIcon={icon}>
          <Typography variant="h5">{btnTitle}</Typography>
        </Button>
      </Stack>
    </>
  );
};

Header.prototypes = {
  title: PropTypes.string,
  btnTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Header;
