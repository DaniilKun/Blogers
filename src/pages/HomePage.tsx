import { Outlet } from 'react-router-dom';
import Header from '../components/heder/Header';
import NavBar from '../components/navBar/NavBar';
import { Box, CssBaseline } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <NavBar />
        <Box
          sx={{
            flex: 1,
            p: 3,
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#EEF4FC',
            overflowY: 'auto',height: '100vh',
          }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
