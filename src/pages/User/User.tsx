import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import { Stack, Typography } from '@mui/material';

const User: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <UserProfile />
      <Stack my={4}>
        <Typography variant='h3' component='h2' color='secondary.dark'>Friends:</Typography>
      </Stack>
    </>
  );
};

export default User;
