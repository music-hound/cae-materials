import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavFolder from "./NavFolder";
import navBarRoutes from "../utils/navBarRoutes";
import { useSelector } from "react-redux";

const NavBar = ()=>{

    const menuOpen = useSelector((state) => state.menuOpen);

    const navigate = useNavigate();

    return (
        <Box className={ menuOpen ? 'navBar navBarVisible' : 'navBar' }
        sx={{
            backgroundColor: 'background.default',
            borderColor: 'border.soft',
        }}>
            {
                navBarRoutes.map((route, index) => (
                    <NavFolder
                        key={index}
                        label={route.label}
                        handleClick={() => navigate(route.dir)}
                    />
                ))
            }
        </Box>
    )
}

export default NavBar;