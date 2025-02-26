import { Grid2 } from "@mui/material";
import ExportXml from "../components/ExportXml";
import MaterialsList from "../components/MaterialsList";

const Materials = ()=>{
    return (
        <Grid2 container spacing={2} justifyContent="space-between">
            <Grid2 xs={true} style={{ display: 'flex', flexGrow: 1 }}>
                <MaterialsList />
            </Grid2>
            <Grid2>
                <ExportXml />
            </Grid2>
        </Grid2>
    )
}

export default Materials;