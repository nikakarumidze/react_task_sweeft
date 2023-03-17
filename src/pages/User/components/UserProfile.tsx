import { CardMedia, Grid, Typography } from '@mui/material';
import { UserProfileType } from '../../../Types';
import { useLocation } from 'react-router-dom';

const baseData = {
  name: '',
  title: '',
  jobDescriptor: '',
  jobArea: '',
  jobType: '',
  email: '',
  ip: '',
  company: { name: '' },
  address: { zipCode: '', city: '', streetAddress: '', country: '', state: '' },
};
const ExampleGrid: React.FC = () => {
  const {
    name,
    title,
    jobDescriptor,
    jobArea,
    jobType,
    email,
    ip,
    company: { name: companyName },
    address: { zipCode, city, streetAddress, country, state },
  } = baseData;

  const location = useLocation();
  //   id
  console.log(location.pathname.split('/')[2]);
  console.log(location.state);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <CardMedia
          component='img'
          alt='Example Image'
          height='140'
          image='/example-image.jpg'
          title='Example Image'
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{name}</Typography>
        <Typography>{title}</Typography>
        <Typography>{jobDescriptor}</Typography>
        <Typography>{jobArea}</Typography>
        <Typography>{jobType}</Typography>
        <Typography>{email}</Typography>
        <Typography>{ip}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{companyName}</Typography>
        <Typography>{zipCode}</Typography>
        <Typography>{city}</Typography>
        <Typography>{streetAddress}</Typography>
        <Typography>{country}</Typography>
        <Typography>{state}</Typography>
        <Typography fontWeight='bold'>Bold Text</Typography>
      </Grid>
    </Grid>
  );
};

export default ExampleGrid;
