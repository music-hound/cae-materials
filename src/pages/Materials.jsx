import { Box, Typography } from "@mui/material";
import MaterialListItem from "../components/MaterialListItem";
import materialsDB from "../utils/materialsDB";
import ExportXml from "../components/ExportXml";

const Materials = ()=>{
    return (
        <Box
        sx={{
            display:'flex',
        }}>
            <Box
            sx={{
                height:'inherit',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                padding:'20px',
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

            <ExportXml />
        </Box>
    )
}

export default Materials;