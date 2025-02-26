import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ExportListItem from "./ExportListItem";
import CustomButton from "./CustomButton";

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
                position:'sticky',
                top:'80px',
                margin:'0px 20px 0px 0px',
                padding:'20px',
                border:'1px solid',
                borderRadius:'20px',
                borderColor:'primary.main',
                display:'flex',
                flexDirection:'column',
                gap:'10px',
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
                    handleClick={handleDownload}
                    />                
        </Box>
    )
}

export default ExportXml;