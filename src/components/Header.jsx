import { Box, CardMedia, IconButton, Paper } from "@mui/material";
import { backgroundGradient, dashPad } from "../styles/styles";
import { useDispatch } from "react-redux";


const Header = ( )=>{
    const dispatch = useDispatch()
    return (
        <Paper
        sx={{
            width:'100%',
            height:'60px',
            padding:`${dashPad}px`,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            gap:`${dashPad}px`,
            background: backgroundGradient,
            borderRadius:'0px',
            position:'fixed',
            zIndex:'5',
        }}>
            <Box
            sx={{
                display:'flex',
                alignItems:'center'
            }}>

            <IconButton
            onClick={()=>{dispatch({type:'TOGGLE_MENU'})}}>
                <svg width="24" height="24" viewBox="0 0 24 24" 
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M4 6H20M4 12H14M4 18H9" 
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"/>
                </svg>
            </IconButton>

            <CardMedia
            component={'img'}
            src={`${import.meta.env.BASE_URL}/logo.png`}
            alt={'logo_materials'}
            sx={{
                width:'100px',
            }}
            />
            </Box>
        </Paper>
    )
}

export default Header;