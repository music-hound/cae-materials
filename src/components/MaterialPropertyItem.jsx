import PropTypes from 'prop-types';
import { Box } from "@mui/material";

const MaterialPropertyItem = ( { property } )=>{

    return (
        <Box
        sx={{
            width:'100%',
            wordWrap: "break-word",
            borderRadius:'10px',
            padding:'20px',
            cursor:'pointer',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            position:'relative'
        }}>
            {property.label}
            {property.name}
            {property.value}
            {property.unit}

        </Box>
    )
}

MaterialPropertyItem.propTypes = {
    property: PropTypes.object.isRequired,
};

export default MaterialPropertyItem;