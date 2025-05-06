import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux';

const NavFolder = ( { label, handleClick } )=>{

    const dispatch = useDispatch();

    return (
        <Box
        onClick={()=>{
            dispatch({type:'TOGGLE_MENU'})
            handleClick()
        }}
        sx={{
            userSelect: 'none',
            cursor:'pointer',
            fontSize:'14px',
            fontWeight:'500',
            transition:'0.2s',
            boxSizing:'border-box',
            padding:'10px 10px',
            borderRadius:'5px',
            pl: '30px',
            "&:hover" : { backgroundColor:'button.hover' }
        }}
        >
            {label}
        </Box>
    )
}

NavFolder.propTypes = {
    label : PropTypes.string.isRequired,
    handleClick : PropTypes.func,
}

export default NavFolder;