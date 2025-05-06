import { Box, Divider, Typography } from "@mui/material";
import MaterialListItem from "../components/MaterialListItem";
import materialsDB from "../utils/materialsDB";
import ExportXml from "./ExportXml";

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
                padding:'60px 200px',
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

                <ExportXml />

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