import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const Header = ({ title, btnTitle, icon, link }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{title}</Typography>
        {btnTitle ? (
          <Link to={link}>
          <Button component="a" href={link} variant="contained" startIcon={icon}>
            <Typography variant="h5">{btnTitle}</Typography>
          </Button>
          </Link>
          
        ) : (
          ''
        )}
      </Stack>
    </>
  );
};

Header.prototypes = {
  title: PropTypes.string,
  btnTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Header.defaultProps = {
  link: '/'
};

export default Header;
