import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';

const Layout = () => {
  const menuOpen = useSelector( state => state.menuOpen );
  const exportList = useSelector(state => state.exportList);
  return (
  <Box>
    <Header />
    <NavBar />
    <Box
    sx={{
      transition:'0.3s',
      paddingTop:'60px',
      paddingLeft:`${ menuOpen ? '220px' : '0px' }`,
      paddingRight:`${ exportList.length === 0 ? '0px' : '350px' }`
    }}>
    <Outlet />
    </Box>
  </Box>
  )
}

export default Layout;
