import PropTypes from 'prop-types';
import { IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";

const ExportListItem = ( { material } )=>{

    const dispatch = useDispatch();

    return (
        <Paper
        elevation={2}
        sx={{
            width:'100%',
            wordWrap: "break-word",
            borderRadius:'10px',
            padding:'20px',
            paddingRight:'80px',
            cursor:'pointer',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            position:'relative'
        }}>
            <Typography
            sx={{
                flexGrow:'1',
                fontSize:'14px'
            }}>
                {material.material_name}
            </Typography>

            <IconButton
            onClick={ () => dispatch({ type: 'REMOVE_EXPORT_ITEM', payload: material }) }
            sx={{
                position:'absolute',
                top:'10px',
                right:'10px'
            }}>
                <DeleteIcon />
            </IconButton>

        </Paper>
    )
}

ExportListItem.propTypes = {
    material: PropTypes.object.isRequired,
};

export default ExportListItem;