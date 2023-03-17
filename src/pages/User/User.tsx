import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import UserProfile from './components/UserProfile'

const User: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);

  return (
    <>
    <UserProfile />
    </>
  )
};

export default User;
