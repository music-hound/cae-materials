import { Box } from "@mui/material";
import ExportXml from "../components/ExportXml";
import MaterialsList from "../components/MaterialsList";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";

const Materials = ()=>{
    const exportList = useSelector(state => state.exportList)
    return (
        <Box
        sx={{
            display:'flex'
        }}>
            <MaterialsList />

            { exportList.length !== 0 &&
                <SideBar>
                    <ExportXml />
                </SideBar>
            }
            
        </Box>
    )
}

export default Materials;