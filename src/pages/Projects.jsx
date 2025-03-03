/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";

const Projects = ()=>{

    return (
        <Box
            sx={{
                width:'100%',
                maxWidth:'1200px',
                height:'inherit',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                padding:'60px 10%',
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

        </Box>
    )
}

export default Projects;