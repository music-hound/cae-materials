import { Box } from "@mui/material";
import CustomButton from "./CustomButton";
import Switch from '../components/SwitchCustom';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SideBar = ()=>{
    
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
            backgroundColor:'primary.main',
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            padding:'20vh 20px 0px 20px'
        }}>


            <CustomButton
            label={'Материалы'}
            handleClick={ () => {handleClick('./')} }
            />
            <CustomButton
            label={'Инструкции'}
            handleClick={ () => {handleClick('./studies')} }
            />
            <CustomButton
            label={'Проекты'}
            handleClick={ () => {handleClick('./projects')} }
            />
            <CustomButton
            label={'ГОСТ 35224'}
            handleClick={ () => {handleClick('./calc')} }
            />
            

            <Switch />
        </Box>
    )
}

export default SideBar;