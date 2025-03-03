import PropTypes from 'prop-types';
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";

const ExportListItem = ( { material } )=>{

    const dispatch = useDispatch();

    return (
        <Box
        sx={{
            border:'1px solid',
            borderColor:'border.soft',
            borderRadius:'5px',
            width:'100%',
            wordWrap: "break-word",
            padding:'10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            gap:'20px',
        }}>
            <Typography
            sx={{
                flexGrow:'1',
                fontSize:'12px'
            }}>
                {material.material_name}
            </Typography>

                <DeleteIcon
                onClick={
                    () => dispatch({ type: 'REMOVE_EXPORT_ITEM', payload: material })
                }
                sx={{
                    fontSize:'20px',
                    cursor:'pointer'
                }}
                />

        </Box>
    )
}

ExportListItem.propTypes = {
    material: PropTypes.object.isRequired,
};

export default ExportListItem;