import PropTypes from 'prop-types';
import { IconButton, Paper, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch, useSelector } from "react-redux";

const MaterialListItem = ( { material } )=>{

    const exportList = useSelector(state => state.exportList)
    const isToExport = exportList.some(item => item.id === material.id);
    const dispatch = useDispatch();

    return (
        <Paper
        onClick={ () => {
            if ( isToExport ) {
                dispatch({ type: 'REMOVE_EXPORT_ITEM', payload: material })
            } else {
                dispatch({ type: 'ADD_EXPORT_ITEM', payload: material })
            }
        }}
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
            <Typography
            sx={{
                flexGrow:'1',
                fontWeight:'600'
            }}>
                {material.material_name}
            </Typography>

            <Typography
            sx={{
                flexGrow:'1'
            }}>
                Теплопроводность {material.thermal_conductivity}
            </Typography>
            <Typography
            sx={{
                flexGrow:'1'
            }}>
                Плотность {material.density}
            </Typography>
            <Typography
            sx={{
                flexGrow:'1'
            }}>
                Теплоёмкость при постоянном давлении {material.heat_capacity_at_constant_pressure}
            </Typography>

            <IconButton
            sx={{
                position:'absolute',
                top:'10px',
                right:'10px'
            }}>
                { isToExport ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
            </IconButton>

        </Paper>
    )
}

MaterialListItem.propTypes = {
    material: PropTypes.object.isRequired,
};

export default MaterialListItem;