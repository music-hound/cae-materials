import { Grid2 } from "@mui/material";
import ExportXml from "../components/ExportXml";
import MaterialsList from "../components/MaterialsList";
import SideBar from "../components/SideBar";

const Materials = ()=>{
    return (
            <Grid2 container spacing={2} justifyContent="space-between">
                <Grid2 xs={true} style={{ display: 'flex', flexGrow: 1 }}>
                    <MaterialsList />
                </Grid2>
                <Grid2>
                    <SideBar><ExportXml /></SideBar>
                </Grid2>
            </Grid2>
    )
}

export default Materials;