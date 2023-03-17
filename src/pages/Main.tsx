import { useState, useEffect, useCallback } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import UserPreview from '../components/UserPreview';
import { User } from '../Types';
import axios from 'axios';

const Main: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    console.log(page, 'this mf causes rerenders');
    const asyncF = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get<any>(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/8`
        );
        console.log(result);
        setUsers((prevItems) => [...prevItems, ...result.data.list]);
      } catch (err) {
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    };
    asyncF();
  }, [page]);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Typography variant='h4' component='h1' mb='32px'>
        Our Animals
      </Typography>
      <Grid container spacing={4}>
        {users.map((user) => (
          <UserPreview user={user} key={user.id} />
        ))}
      </Grid>
      {!isLoading && (
        <CircularProgress
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    </>
  );
};

export default Main;
