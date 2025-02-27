import { Box, CardMedia, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Switch from '../components/SwitchCustom';


const Header = ( )=>{
    const isLight = useSelector((state) => state.isLight);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <Box
        sx={{
            width:'100%',
            height:'60px',
            padding:`20px`,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor: 'background.main',
            position:'fixed',
            zIndex:'5',
            borderBottom:'1px solid',
            borderColor:'border.soft',
        }}>
            <Box
            sx={{
                display:'flex',
                alignItems:'center'
            }}>

            { isSmallScreen && (
                <IconButton
                onClick={()=>{dispatch({type:'TOGGLE_MENU'})}}>
                    <svg
                    style={{ stroke: `${theme.palette.text.primary}`}}
                    width="24" height="24"
                    viewBox="0 0 24 24" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M4 6H20M4 12H14M4 18H9"
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                    </svg>
                </IconButton>
            )}

            <CardMedia
            component={'img'}
            src={`${import.meta.env.BASE_URL}/logo${isLight ? '_dark' : ''}.png`}
            alt={'logo_materials'}
            sx={{
                width:'100px',
            }}
            />
            </Box>
            <Switch />
        </Box>
    )
}

export default Header;