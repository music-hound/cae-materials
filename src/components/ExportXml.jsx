import { Box, Button, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ExportListItem from "./ExportListItem";

const ExportXml = ()=>{

    const exportList = useSelector(state => state.exportList)
    if ( exportList.length === 0) return;

    const generateXML = (materials) => {
        let xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n<archive>\n  <model>\n`;

        materials.forEach((material, index) => {
            xmlString += `    <material tag="mat${index + 1}" type="Common" component="">\n`;
            xmlString += `      <label label="${material.material_name}"/>\n`;
            xmlString += `      <propertyGroup tag="def">\n`;
            xmlString += `        <set name="thermalconductivity" value="${material.thermal_conductivity}"/>\n`;
            xmlString += `        <set name="density" value="${material.density}"/>\n`;
            xmlString += `        <set name="heatcapacity" value="${material.heat_capacity_at_constant_pressure}"/>\n`;
            xmlString += `      </propertyGroup>\n`;
            xmlString += `    </material>\n`;
        });

        xmlString += `  </model>\n</archive>`;

        return xmlString;
    };

    const handleDownload = () => {
        const xmlContent = generateXML(exportList);
        const blob = new Blob([xmlContent], { type: "application/xml" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.xml";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
            <Box
            sx={{
                minWidth:'350px',
                padding:'20px',
                display:'flex',
                flexDirection:'column',
                gap:'10px',
            }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize:'20px',
                            fontWeight:'400'
                        }}>
                            Экспорт XML
                    </Typography>

                    <Divider
                    sx={{
                        mb:1
                    }}
                    />

                {
                    exportList.map((material)=>{
                        return (
                            <ExportListItem key={material.id} material={material}/>
                        )
                    })
                }
                    <Button
                    variant="contained"
                    onClick={handleDownload}
                    >Скачать XML</Button>                
        </Box>
    )
}

export default ExportXml;