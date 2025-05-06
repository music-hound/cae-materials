import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch, useSelector } from "react-redux";
import ApprovalLabel from './ApprovalLabel';

const MaterialListItem = ( { material } )=>{

    const exportList = useSelector(state => state.exportList)
    const isToExport = exportList.some(item => item.id === material.id);
    const dispatch = useDispatch();

    return (
        <Box
        onClick={ () => {
            if ( isToExport ) {
                dispatch({ type: 'REMOVE_EXPORT_ITEM', payload: material })
            } else {
                dispatch({ type: 'ADD_EXPORT_ITEM', payload: material })
            }
        }}
        sx={{
            cursor:'pointer',
            transition:'0.3s',
            border:'1px solid',
            borderColor: `${isToExport ? 'primary.main' : 'border.soft'}`,
            wordWrap: "break-word",
            borderRadius:'10px',
            padding:'20px',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            position:'relative'
        }}>
            <Box
            sx={{
                display:'flex',
                alignItems:'center'
            }}>

                <ApprovalLabel approved={material.approved} />

                <Typography
                sx={{
                    fontWeight:'600'
                }}>
                    {material.material_name}
                </Typography>

            </Box>

            <Box
            sx={{
                display:'flex',
                alignItems:'center'
            }}>

                <IconButton
                sx={{
                    transform:'translateX(-9px)'
                }}>
                    { isToExport ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
                </IconButton>

                <Box
                sx={{
                    pl:2,
                    borderLeft:'1px solid',
                    borderColor:'border.soft',
                }}>

                    <Typography
                    sx={{
                        flexGrow:'1',
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

                </Box>

            </Box>

        </Box>
    )
}

MaterialListItem.propTypes = {
    material: PropTypes.object.isRequired,
};

export default MaterialListItem;