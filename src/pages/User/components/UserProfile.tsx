import { CardMedia, Grid, Typography, Box } from '@mui/material';
import { UserProfileType } from '../../../Types';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseData = {
  id: 0,
  name: '',
  lastName: '',
  prefix: '',
  title: '',
  imageUrl: '',
  jobDescriptor: '',
  jobArea: '',
  jobType: '',
  email: '',
  ip: '',
  company: { name: '', suffix: '' },
  address: { zipCode: '', city: '', streetAddress: '', country: '', state: '' },
};
const UserProfile: React.FC = () => {
  const [data, setData] = useState<UserProfileType>(baseData);
  const location = useLocation();

  useEffect(() => {
    axios
      .get<UserProfileType>(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${location.pathname}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [location.pathname]);

  const locationHistory =
    location.state &&
    location.state.map((item: any, index: number) => (
      <Box key={index}>
        <Link to={'/user/:' + item.id} replace={true}>
          {item.userInfo}
        </Link>
        {index < location.state.length - 1 && ' > '}
      </Box>
    ));

  return (
    <>
      {data.name && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardMedia
              component='img'
              alt='User Image'
              image={data.imageUrl}
              title='User Image'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5' color='secondary'>
              INFO
            </Typography>
            <Box sx={{ p: 2, border: '1px solid black' }}>
              <Typography fontWeight='bold'>
                {data.prefix + ' ' + data.name + ' ' + data.lastName}
              </Typography>
              <Typography fontStyle='italic' mb={2}>
                {data.title}
              </Typography>
              <Typography>Email: {data.email}</Typography>
              <Typography>IP: {data.ip}</Typography>
              <Typography>{data.jobDescriptor}</Typography>
              <Typography>Job Area: {data.jobArea}</Typography>
              <Typography>Job Type: {data.jobType}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5' color='secondary'>
              ADDRESS
            </Typography>
            <Box sx={{ p: 2, border: '1px solid black' }}>
              <Typography>
                {data.company.name} {data.address.zipCode}
              </Typography>
              <Typography>City: {data.address.city}</Typography>
              <Typography>Street: {data.address.streetAddress}</Typography>
              <Typography>Country: {data.address.country}</Typography>
              <Typography>State: {data.address.state}</Typography>
            </Box>
          </Grid>
          {locationHistory}
        </Grid>
      )}
    </>
  );
};

export default UserProfile;
