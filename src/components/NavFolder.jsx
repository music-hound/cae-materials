import PropTypes from 'prop-types';
import { Box } from "@mui/material";

const NavFolder = ( { label, handleClick } )=>{

    return (
        <Box
        onClick={handleClick}
        sx={{
            userSelect: 'none',
            cursor:'pointer',
            fontSize:'14px',
            fontWeight:'500',
            transition:'0.3s',
            boxSizing:'border-box',
            padding:'10px 10px',
            borderRadius:'5px',
            "&:hover" : { backgroundColor:'primary.main' }
        }}
        >
            - {label}
        </Box>
    )
}

NavFolder.propTypes = {
    label : PropTypes.string.isRequired,
    handleClick : PropTypes.func,
}

export default NavFolder;