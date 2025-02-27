import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavFolder from "./NavFolder";

const NavBar = ()=>{
    
    const menuOpen = useSelector( state => state.menuOpen )
    const navigate = useNavigate();

    function handleClick( route ){
        navigate(route)
    }

    return (
        <Box
        sx={{
            width:'220px',
            transition:'0.3s',
            transform:`translateX(${ menuOpen ? '0px' : '-300px'})`,
            position:'fixed',
            height:'100vh',
            backgroundColor:'background.default',
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            padding:'80px 10px 0px 10px',
            borderRight:'1px solid',
            borderColor:'border.soft'
        }}>


            <NavFolder
            label={'Материалы'}
            handleClick={ () => {handleClick('./')} }
            />
            <NavFolder
            label={'Инструкции'}
            handleClick={ () => {handleClick('./studies')} }
            />
            <NavFolder
            label={'Проекты'}
            handleClick={ () => {handleClick('./projects')} }
            />
            <NavFolder
            label={'ГОСТ 35224'}
            handleClick={ () => {handleClick('./calc')} }
            />

        </Box>
    )
}

export default NavBar;