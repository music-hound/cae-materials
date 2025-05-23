import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const ErrorPage = ()=>{
    const dispatch = useDispatch()
    return (
        <Box
        className={'pagePadding'}
        sx={{
            width:'100%',
            height:'inherit',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography
            sx={{
                fontSize:'50px',
            }}>
                404
            </Typography>
            
            <Button
            variant="outlined"
            onClick={()=>{
                dispatch( { type:'TOGGLE_THEME' } )
            }}
            >
                change theme
            </Button>

        </Box>
    )
}

export default ErrorPage;