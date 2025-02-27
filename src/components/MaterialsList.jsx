import { Box, Divider, Typography } from "@mui/material";
import MaterialListItem from "../components/MaterialListItem";
import materialsDB from "../utils/materialsDB";

const MaterialsList = ()=>{
    return (
            <Box
            sx={{
                width:'100%',
                maxWidth:'1000px',
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
                    Материалы
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
                {
                    materialsDB.map((material)=>{
                        return (
                            <MaterialListItem key={material.id} material={material}/>
                        )
                    })
                }
                </Box>

            </Box>
    )
}

export default MaterialsList;