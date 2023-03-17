import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import { Stack, Typography } from '@mui/material';
import UserListScroll from '../../components/UserListScroll';

const User: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <UserProfile />
      <Stack my={4}>
        <Typography variant='h3' component='h2' color='secondary.dark'>
          Friends:
        </Typography>
      </Stack>
      <UserListScroll link={`${id}/friends/`} />
    </>
  );
};

export default User;
