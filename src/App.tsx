import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import User from './pages/User/User';

const App: React.FC = () => {
  return (
    <Container sx={{ pt: '32px', pb: '64px', bgColor: '#f5f5f5' }}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/user/:id' element={<User />}/>
      </Routes>
    </Container>
  );
};

export default App;
