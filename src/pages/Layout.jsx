import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
  <Box>
    <Header />
    <NavBar />
    <Box className={'outletContainer'}>
    <Outlet />
    </Box>
  </Box>
  )
}

export default Layout;
