import { useState, useEffect, useCallback } from 'react';
import { CircularProgress, Grid, Stack } from '@mui/material';
import UserPreview from '../components/UserPreview';
import { User } from '../Types';
import { requestHandler } from '../helpers/RequestHandler';

export interface userListScrollProps {
  link?: string;
}

const UserListScroll: React.FC<userListScrollProps> = ({ link }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [currLink, setCurrLink] = useState<string | undefined>(link);

  useEffect(() => {
    requestHandler(
      setPage,
      setIsLoading,
      setUsers,
      setHasMore,
      setCurrLink,
      page,
      link,
      currLink
    );
  }, [page, link,currLink]);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 100 &&
      !isLoading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Grid container spacing={4}>
        {users.map((user) => (
          <UserPreview user={user} key={user.id} />
        ))}
      </Grid>
      <Stack justifyContent='center' alignItems='center' my={5}>
        {!isLoading && <CircularProgress size={60} />}
      </Stack>
    </>
  );
};

export default UserListScroll;
