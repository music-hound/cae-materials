import { Box, Divider, Typography } from "@mui/material";
import LockPersonIcon from '@mui/icons-material/LockPerson';

const Projects = ()=>{

    return (
        <Box
        className={'pagePadding'}
            sx={{
                width:'100%',
                height:'inherit',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
            }}>
                <Typography
                variant="h2"
                sx={{
                    fontSize:'30px',
                    fontWeight:'600',
                    mb:'20px'
                }}>
                    Проекты исследований
                </Typography>

                <Divider
                sx={{
                    mb:2,
                }}
                />

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px',
                }}
                >
                </Box>

                <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'10px',
                    height:'60vh',
                }}><LockPersonIcon sx={{fontSize:'100px',color:'#ccc'}} /></Box>

        </Box>
    )
}

export default Projects;