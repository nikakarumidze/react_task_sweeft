import { Typography } from '@mui/material';
import UserListScroll from '../components/UserListScroll';

const Main: React.FC = () => {
  return (
    <>
      <Typography variant='h4' component='h1' mb='32px'>
        Our Animals
      </Typography>
      <UserListScroll />
    </>
  );
};

export default Main;
