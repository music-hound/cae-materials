import PropTypes from 'prop-types';
import { Box } from "@mui/material";

const SideBar = ( { children })=>{

    return (
        <Box
        sx={{
            borderLeft:'1px solid',
            borderColor:'border.soft',
            transition:'0.3s',
            position:'fixed',
            top:'0px',
            right:'0px',
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            padding:'80px 20px 0px 20px',
            backgroundColor:'background.default',
        }}>
            { children }
        </Box>
    )
}

SideBar.propTypes = {
    children : PropTypes.node,
}

export default SideBar;