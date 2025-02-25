import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';
import SideBar from '../components/SideBar';
import { useSelector } from 'react-redux';

const Layout = () => {
  const menuOpen = useSelector( state => state.menuOpen )
  return (
  <Box>
    <Header />
    <SideBar />
    <Box
    sx={{
      transition:'0.3s',
      paddingTop:'60px',
      paddingLeft:`${ menuOpen ? '220px' : '0px' }`
    }}>
    <Outlet />
    </Box>
  </Box>
  )
}

export default Layout;
