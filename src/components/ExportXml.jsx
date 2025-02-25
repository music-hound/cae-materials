import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ExportListItem from "./ExportListItem";
import CustomButton from "./CustomButton";

const ExportXml = ()=>{

    const exportList = useSelector(state => state.exportList)
    if ( exportList.length === 0) return;

    return (
            <Box
            sx={{
                marginTop:'20px',
                padding:'20px',
                border:'1px solid',
                borderRadius:'20px',
                borderColor:'primary.main',
                height:'100%',
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                backgroundColor:'#ddd',
            }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize:'30px',
                            fontWeight:'600',
                        }}>
                            Экспорт XML
                    </Typography>

                {
                    exportList.map((material)=>{
                        return (
                            <ExportListItem key={material.id} material={material}/>
                        )
                    })
                }
                    <CustomButton
                    label={'Скачать XML'}
                    handleClick={()=> {alert('DOWNLOADED!')}}
                    />                
        </Box>
    )
}

export default ExportXml;