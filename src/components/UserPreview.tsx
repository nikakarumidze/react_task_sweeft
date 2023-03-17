import React from 'react';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { User } from '../Types';
import { useNavigate, useLocation } from 'react-router-dom';

interface userPreviewProps {
  user: User;
}

const UserPreview: React.FC<userPreviewProps> = ({ user }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const userInfo = user.prefix + ' ' + user.name + ' ' + user.lastName;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{ border: '1px solid black', cursor: 'pointer' }}
        onClick={() =>
          navigate(`/user/${user.id}`, {
            state: state
              ? [...state, { id: user.id, userInfo }]
              : [{ id: user.id, userInfo }],
            replace: true,
          })
        }
      >
        <CardMedia component='img' image={user.imageUrl} />
        <Typography
          variant='h6'
          component='h3'
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          {userInfo}
        </Typography>
        <Typography component='h2' mb='16px'>
          {user.title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default UserPreview;
