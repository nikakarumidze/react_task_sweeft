import { User } from '../Types';
import axios from 'axios';

export const requestHandler = async (
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrLink: React.Dispatch<React.SetStateAction<string | undefined>>,
  page: number,
  link: string | undefined,
  currLink: string | undefined
) => {
  if (currLink !== link) {
    page = 1;
    setCurrLink(link);
    setHasMore(true);
    setPage(1)
  }
  try {
    setIsLoading(true);
    const result = await axios.get<any>(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${
        link || ''
      }${page}/8`
    );
    page === 1
      ? setUsers(result.data.list)
      : setUsers((prevItems) => [...prevItems, ...result.data.list]);
  } catch (err) {
    setHasMore(false);
  } finally {
    setIsLoading(false);
  }
};
