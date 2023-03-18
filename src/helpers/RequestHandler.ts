import { User } from '../Types';
import axios from 'axios';

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export const requestHandler = async (
  setPage: StateSetter<number>,
  setIsLoading: StateSetter<boolean>,
  setUsers: StateSetter<User[]>,
  setHasMore: StateSetter<boolean>,
  setCurrLink: StateSetter<string | undefined>,
  page: number,
  link: string | undefined,
  currLink: string | undefined
) => {
  // If the current link has changed(user id in default case), reset the page number and update state
  if (currLink !== link) {
    page = 1;
    setCurrLink(link);
    setHasMore(true);
    setPage(1);
  }
  try {
    setIsLoading(true);
    const result = await axios.get<any>(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${
        link || ''
      }${page}/8`
    );
    // If first page, create new user list, in other cases add received data to existing data.
    page === 1
      ? setUsers(result.data.list)
      : setUsers((prevItems) => [...prevItems, ...result.data.list]);
  } catch (err) {
    setHasMore(false);
  } finally {
    setIsLoading(false);
  }
};
