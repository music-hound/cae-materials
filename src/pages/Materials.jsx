import { Box, Button, Divider, Typography } from "@mui/material";
import ExportXml from "../components/ExportXml";
import materialsDB from "../utils/materialsDB";
import MaterialListItem from "../components/MaterialListItem";
import { useState } from "react";

const Materials = ()=>{
    const [ exportVisible, setExportVisible ] = useState(false);
    return (
        <Box
        className={'pagePadding'}
        sx={{
            width:'100%',
            display:'flex',
            height:'inherit',
            flexDirection:'column',
            justifyContent:'center',
            gap:'20px',
        }}>
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}>
                    <Typography
                    variant="h2"
                    sx={{
                        fontSize:'30px',
                        fontWeight:'600',
                    }}>
                        Материалы
                    </Typography>
                    <Box
                    sx={{position:'relative'}}
                    >                        
                        <Button variant='contained' onClick={()=>{setExportVisible(!exportVisible)}}>Экспорт XML</Button>
                        <ExportXml exportVisible={exportVisible}/>
                    </Box>
                </Box>
            <Divider />

            <Box
            sx={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',
                gridGap:'20px',
            }}>  
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

export default Materials;