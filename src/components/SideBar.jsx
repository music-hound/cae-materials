import PropTypes from 'prop-types';
import { Box } from "@mui/material";

const SideBar = ( { children })=>{

    return (
        <Box
        sx={{
            // width:'220px',
            transition:'0.3s',
            // transform:`translateX(${ menuOpen ? '550px' : '-300px'})`,
            position:'fixed',
            right:'0px',
            height:'100vh',
            backgroundColor:'background.default',
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            padding:'60px 20px 0px 20px',
        }}>
            { children }
        </Box>
    )
}

SideBar.propTypes = {
    children : PropTypes.node,
}

export default SideBar;