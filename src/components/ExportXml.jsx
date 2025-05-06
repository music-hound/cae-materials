import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import ExportListItem from "./ExportListItem";
import DownloadIcon from '@mui/icons-material/Download';
import PropTypes from 'prop-types';

const ExportXml = ( { exportVisible } )=>{

    const exportList = useSelector(state => state.exportList)

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
                zIndex:'10',
                backgroundColor:'background.default',
                border:'1px solid',
                borderColor:'border.soft',
                borderRadius:'10px',
                position:'absolute',
                right:'0px',
                top:'50px',
                padding:'20px',
                display:`${ exportVisible ? 'flex' : 'none' }`,
                flexDirection:'column',
                gap:'10px',
                boxShadow:'0px 0px 30px rgba(0, 0, 0, 0.25)',
            }}>
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
                    >
                        <DownloadIcon />Загрузить
                    </Button>                
        </Box>
    )
}

ExportXml.propTypes = {
    exportVisible: PropTypes.bool.isRequired,
};

export default ExportXml;